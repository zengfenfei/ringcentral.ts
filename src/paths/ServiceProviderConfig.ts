/* Generated code */
import IServiceProviderConfig from '../definitions/ServiceProviderConfig';
import PathSegment from '../PathSegment';

export default class ServiceProviderConfig extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('ServiceProviderConfig', id, prv, service);
	}

	/**
	 * Returns the list of users requested.
	 * 
	 * Permissio: ReadAccounts
	 * API Group: Medium
	 */
	get(): Promise<IServiceProviderConfig> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
