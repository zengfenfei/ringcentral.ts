import { EventEmitter } from "events";
import { format } from 'url';
import { stringify } from 'querystring';
import * as fetch from "isomorphic-fetch";
//import { name as packageName, version as packageVersion } from "./generated/package";
import Token, { TokenStore, MemoryTokenStore } from "./Token";
import isKnownReqBodyType from "known-fetch-body";

const SERVER_PRODUCTION = "https://platform.ringcentral.com";
const SERVER_SANDBOX = "https://platform.devtest.ringcentral.com";

const SERVER_VERSION = "v1.0";

const TOKEN_URL = "/restapi/oauth/token";
const REVOKE_URL = "/restapi/oauth/revoke";

// Auth events
const EventLoginStart = "LoginStart";
const EventLoginSuccess = "LoginSuccess";
const EventLoginError = "LoginError";
const EventRefreshStart = "RefreshStart";
const EventRefreshSuccess = "RefreshSuccess";
const EventRefreshError = "RefreshError";
const EventLogoutStart = "LogoutStart";
const EventLogoutSuccess = "LogoutSuccess";
const EventLogoutError = "LogoutError";

let pkg = require('../package.json');

/**
 * A wrapper for sending http requests to RingCentralService.
 */
export default class RestClient extends EventEmitter {
    server: string;
    appKey: string;
    appSecret: string;

    tokenStore: TokenStore;
    private ongoingTokenRefresh: Promise<void>;

    agents = [pkg.name + "/" + pkg.version];

    constructor(opts: ServiceOptions) {
        super();
        this.server = opts.server || SERVER_PRODUCTION;
        this.appKey = opts.appKey;
        this.appSecret = opts.appSecret;
        this.tokenStore = opts.tokenStore || new MemoryTokenStore();
    }

    private basicAuth(): string {
        return new Buffer(this.appKey + ":" + this.appSecret).toString("base64");
    }

    /**
     * Send http GET method
     */
    get(url: string, query?: {}): Promise<Response> {
        return this.call(url, query);
    }

    delete(url: string, query?: {}): Promise<Response> {
        return this.call(url, query, { method: "DELETE" });
    }

    /** Body can be Blob, FormData, URLSearchParams, String, Buffer or stream.Readable, any other type, plain object or instance of class will stringified as json. */
    post(url: string, body: any, query?: {}): Promise<Response> {
        return this.call(url, query, { method: "POST", body: body });
    }

    /** Type of body is the same as post. */
    put(url: string, body: any, query?: {}): Promise<Response> {
        return this.call(url, query, { method: "PUT", body: body });
    }

    /**
     * Perform an authenticated API call.
     */
    async call(endpoint: string, query?: {}, opts?: RequestInit): Promise<Response> {
        let token = this.tokenStore.get();
        if (!token) {
            let e = new Error("Cannot perform api calls without login.");
            e.name = "NotLogin";
            throw e;
        }
        if (token.expired()) {
            if (token.refreshTokenExpired()) {
                throw new Error("AccessToken and refreshToken have expired.");
            } else {
                await this.refreshToken();
            }
        }
        opts = opts || {};
        let headers = opts.headers = opts.headers || {};
        headers["Authorization"] = token.type + " " + token.accessToken;
        headers["Client-Id"] = this.appKey;
        headers["X-User-Agent"] = this.agents.join(' ');
        if (!isKnownReqBodyType(opts.body)) {
            opts.body = JSON.stringify(opts.body);
            headers["content-type"] = "application/json";
        }
        let url = format({ pathname: this.server + "/restapi/" + SERVER_VERSION + endpoint, query });
        let res = await fetch(url);
        if (!res.ok) {
            let errorMessage = 'Fail to request ' + url + '.';
            if (isJsonRes(res)) {
                let data = await res.json();
                throw new Error(errorMessage);
            } else {
                let text = await res.text();
                throw new Error(errorMessage + '\n' + text);
            }
        }
        return res;
    }

    async auth(opts: { username: string; password: string; extension?: string, accessTokenTtl?: number, refreshTokenTtl?: number, scope?: string[] }): Promise<void> {
        let tokenData = this.tokenStore.get();
        let body = {
            grant_type: "password",
            username: opts.username,
            extension: opts.extension,
            password: opts.password,
            access_token_ttl: opts.accessTokenTtl,
            refresh_token_ttl: opts.refreshTokenTtl,
            scope: opts.scope && opts.scope.join(" ")
        };
        this.emit(EventLoginStart);
        let startTime = Date.now();
        let res = await fetch(this.server + TOKEN_URL, {
            body: stringify(body),
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            }
        });
        if (res.ok) {
            let resJson = await res.json();
            this.tokenStore.save(new Token(resJson, Date.now() - startTime));
            this.emit(EventLoginSuccess);
        } else {
            if (isJsonRes(res)) {
                let resJson = await res.json();
                let e = new RestError('RC platform auth fails: ' + (resJson.error_description || resJson.message),
                    resJson.error || resJson.errorCode,
                    res.status,
                    resJson);
                this.emit(EventLoginError, e);
                throw e;
            } else {
                let resText = await res.text();
                let e = new RestError('RC platform auth fails: ' + resText, 'Unknown', res.status, resText);
                this.emit(EventLoginError, e);
                throw e;
            }
        }
    }

    logout(): Promise<void> {
        let tokenData = this.tokenStore.get();
        if (!tokenData) {
            return Promise.resolve(null);
        }
        this.emit(EventLogoutStart);
        return fetch(this.server + REVOKE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            },
            body: stringify({ token: tokenData.token.accessToken })
        }).then(detectResponseError).then(() => {
            this.tokenStore.clear();
            this.emit(EventLogoutSuccess);
        }, err => {
            this.emit(EventLogoutError, err);
            throw err;
        });
    }

    /** Only one request will be sent at the same time. */
    refreshToken(): Promise<void> {
        let tokenData = this.tokenStore.get();
        if (!tokenData) {
            let e = new Error("Cannot refresh token without login.");
            e.name = "NotLogin";
            return Promise.reject(e);
        }
        if (this.ongoingTokenRefresh) {
            return this.ongoingTokenRefresh;
        }
        this.emit(EventRefreshStart);
        let token = tokenData.token;
        if (token.refreshTokenExpired()) {
            this.emit(EventRefreshError, new Error("Refresh token expired."));
            return Promise.reject(new Error("Refresh token has expired, can not refresh."));
        }
        let body = {
            refresh_token: token.refreshToken,
            grant_type: "refresh_token",
            endpoint_id: token.endpointId
        };
        let startTime = Date.now();
        this.ongoingTokenRefresh = fetch(this.server + TOKEN_URL, {
            method: "POST",
            body: stringify(body),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + this.basicAuth()
            }
        }).then(detectResponseError).then(res => res.json()).then(json => {
            this.ongoingTokenRefresh = null;
            tokenData.token = new Token(json, Date.now() - startTime);
            this.tokenStore.save(tokenData);
            this.emit(EventRefreshSuccess);
        }, e => {
            this.ongoingTokenRefresh = null;
            this.emit(EventRefreshError, e);
            throw e;
        });
        return this.ongoingTokenRefresh;
    }

}

function isJsonRes(res: Response) {
    let ct = res.headers.get("content-type");
    return ct && ct.match("application/json");
}

function detectResponseError(res: Response): Response | Promise<Response> {
    if (res.ok) {
        return res;
    }
    let isJson = isJsonRes(res);
    let errorResult = isJson ? res.json() : res.text();
    return errorResult.then(err => Promise.reject(err));
}

class RestError extends Error {
    code: string;
    httpStatus: number;
    detail: any;    // http response json or text

    constructor(message: string, code: string, httpStatus: number, detail?) {
        super(message);
        this.code = code;
        this.httpStatus = httpStatus;
        this.detail = detail;
    }
}

interface ServiceOptions {
    server?: string;
    appKey: string;
    appSecret: string;
    /** Default TokenStore is MemoryTokenStore */
    tokenStore?: TokenStore;
}


export {
    SERVER_PRODUCTION,
    SERVER_SANDBOX,
    SERVER_VERSION,

    EventLoginStart,
    EventLoginSuccess,
    EventLoginError,
    EventRefreshStart,
    EventRefreshSuccess,
    EventRefreshError,
    EventLogoutStart,
    EventLogoutSuccess,
    EventLogoutError,

    ServiceOptions
}