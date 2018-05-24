/* Generated code */
import GetUserBusinessHoursResponse from '../definitions/GetUserBusinessHoursResponse';
import UserBusinessHoursUpdate from '../definitions/UserBusinessHoursUpdate';
import UserBusinessHoursUpdateRequest from '../definitions/UserBusinessHoursUpdateRequest';
import PathSegment from '../PathSegment';

export default class BusinessHours extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('business-hours', id, prv, service);
	}

	/**
	 * Returns the extension user hours when answering rules are to be applied.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(): Promise<GetUserBusinessHoursResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Updates the extension user hours when answering rules are to be applied.
	 * 
	 * Permission: EditExtensions
	 * API Group: Medium
	 */
	put(body: UserBusinessHoursUpdateRequest): Promise<UserBusinessHoursUpdate> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
