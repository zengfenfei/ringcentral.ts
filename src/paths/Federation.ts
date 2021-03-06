/* Generated code */
import FederationInfo from '../definitions/FederationInfo';
import PathSegment from '../PathSegment';

export default class Federation extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('federation', id, prv, service);
	}

	/**
	 *  <p style='font-style:italic;'></p><p>Returns information on a federation and associated accounts.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
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
