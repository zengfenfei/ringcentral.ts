/* Generated code */
import GetUserListResponse from '../definitions/GetUserListResponse';
import UserCreationRequest from '../definitions/UserCreationRequest';
import UserInfo from '../definitions/UserInfo';
import UserUpdateRequest from '../definitions/UserUpdateRequest';
import PathSegment from '../PathSegment';

export default class Users extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('Users', id, prv, service);
	}

	/**
	 * Returns the list of users requested.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Medium
	 */
	get(query?: GetQuery): Promise<GetUserListResponse> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Creates a user.
	 * 
	 * Permission: EditAccounts
	 * API Group: Medium
	 */
	post(body: UserCreationRequest): Promise<UserInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Updating User using SCIM.
	 * 
	 * Permission: EditExtensions
	 * API Group: Medium
	 */
	put(body: UserUpdateRequest): Promise<UserInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Deleting User using SCIM.
	 * 
	 * Permission: EditAccounts
	 * API Group: Medium
	 */
	delete(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}

}

export interface GetQuery {

	/**
	 * only support 'userName' or 'email' filter expressions for now
	 */
	filter?: 'userName' | 'email';

	/**
	 * page size
	 */
	count?: number;

	/**
	 * start index (1-based)
	 */
	startIndex?: number;
}
