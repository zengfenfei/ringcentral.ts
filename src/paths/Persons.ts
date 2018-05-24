/* Generated code */
import GlipPersonInfo from '../definitions/GlipPersonInfo';
import PathSegment from '../PathSegment';

export default class Persons extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('persons', id, prv, service);
	}

	/**
	 * Returns a user or few users by ID(s). Batch request is supported.
	 * 
	 * Permission: Glip
	 * API Group: Light
	 */
	get(): Promise<GlipPersonInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
