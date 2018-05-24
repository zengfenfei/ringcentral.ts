/* Generated code */
import GetAccountInfoResponse from '../definitions/GetAccountInfoResponse';
import PathSegment from '../PathSegment';
import Extension from './Extension';
import CallLog from './CallLog';
import CallLogSync from './CallLogSync';
import ActiveCalls from './ActiveCalls';
import Recording from './Recording';
import Directory from './Directory';
import Bot from './Bot';
import Presence from './Presence';
import BusinessHours from './BusinessHours';
import Greeting from './Greeting';
import AnsweringRule from './AnsweringRule';
import IvrMenus from './IvrMenus';
import IvrPrompts from './IvrPrompts';
import BusinessAddress from './BusinessAddress';
import ServiceInfo from './ServiceInfo';
import PhoneNumber from './PhoneNumber';
import Device from './Device';
import Licenses from './Licenses';
import Department from './Department';
import PagingOnlyGroups from './PagingOnlyGroups';
import ParkLocations from './ParkLocations';

export default class Account extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('account', id || '~', prv, service);
	}

/**
	 * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
	 */	extension(id?: string) {
		return new Extension(this, id);
	}

/**
	 * Internal identifier of a call log record
	 */	callLog(id?: string) {
		return new CallLog(this, id);
	}

	callLogSync(id?: string) {
		return new CallLogSync(this, id);
	}

	activeCalls(id?: string) {
		return new ActiveCalls(this, id);
	}

/**
	 * Internal identifier of a recording (returned in Call Log)
	 */	recording(id?: string) {
		return new Recording(this, id);
	}

	directory(id?: string) {
		return new Directory(this, id);
	}

	bot(id?: string) {
		return new Bot(this, id);
	}

	presence(id?: string) {
		return new Presence(this, id);
	}

	businessHours(id?: string) {
		return new BusinessHours(this, id);
	}

	greeting(id?: string) {
		return new Greeting(this, id);
	}

/**
	 * Internal identifier of an answering rule. 
	 * The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
	 */	answeringRule(id?: string) {
		return new AnsweringRule(this, id);
	}

	ivrMenus(id?: string) {
		return new IvrMenus(this, id);
	}

	ivrPrompts(id?: string) {
		return new IvrPrompts(this, id);
	}

	businessAddress(id?: string) {
		return new BusinessAddress(this, id);
	}

	serviceInfo(id?: string) {
		return new ServiceInfo(this, id);
	}

	phoneNumber(id?: string) {
		return new PhoneNumber(this, id);
	}

	device(id?: string) {
		return new Device(this, id);
	}

/**
	 * Internal identifier of a license
	 */	licenses(id?: string) {
		return new Licenses(this, id);
	}

/**
	 * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
	 */	department(id?: string) {
		return new Department(this, id);
	}

	pagingOnlyGroups(id?: string) {
		return new PagingOnlyGroups(this, id);
	}

	parkLocations(id?: string) {
		return new ParkLocations(this, id);
	}

	/**
	 * Returns basic information about a particular RingCentral customer account
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group
	 */
	get(): Promise<GetAccountInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
