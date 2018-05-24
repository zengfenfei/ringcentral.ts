/* Generated code */
import GlipCompany from '../definitions/GlipCompany';
import PathSegment from '../PathSegment';

export default class Companies extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('companies', id, prv, service);
	}

	/**
	 * Returns a company by ID.
	 * 
	 * Permission: Glip
	 * API Group: Light
	 */
	get(): Promise<GlipCompany> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
