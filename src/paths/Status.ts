/* Generated code */
import PathSegment from '../PathSegment';

export default class Status extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('status', id, prv, service);
	}

	/**
	 * Returns the API status; status '200' means the API is working fine, 
	 * and '503' means it is temporary unavailable
	 * 
	 * API Group: Light
	 */
	get(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then(res => {});
	}

}
