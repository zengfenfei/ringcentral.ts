/* Generated code */
import PathSegment from '../PathSegment';

export default class Status extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('status', id, prv, service);
	}

	/**
	 *  <p style='font-style:italic;'>Since 1.0.27 (Release 8.3)</p><p>Returns the API status; status '200' means the API is working fine, and '503' means it is temporary unavailable.</p><h4>API Group</h4><p>Light</p>
	 */
	get(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then(res => {});
	}

}
