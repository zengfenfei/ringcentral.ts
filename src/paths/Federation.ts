/* Generated code */
import FederationInfo from '../definitions/FederationInfo';
import PathSegment from '../PathSegment';

export default class Federation extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('federation', id, prv, service);
	}

	/**
	 * Returns information on a federation and associated accounts.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Medium
	 */
	get(): Promise<FederationInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
