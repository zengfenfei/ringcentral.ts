/* Generated code */
import AccountBusinessAddressResource from '../definitions/AccountBusinessAddressResource';
import GetAccountInfoResponse from '../definitions/GetAccountInfoResponse';
import ModifyAccountBusinessAddressRequest from '../definitions/ModifyAccountBusinessAddressRequest';
import PathSegment from '../PathSegment';

export default class BusinessAddress extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('business-address', id, prv, service);
	}

	/**
	 * Return company address (as listed under Company Info in service web)
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(): Promise<GetAccountInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Modify company address
	 * 
	 * Permission: EditAccounts, ReadAccounts
	 * Usage Plan Group: Medium
	 */
	put(body: ModifyAccountBusinessAddressRequest): Promise<AccountBusinessAddressResource> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
