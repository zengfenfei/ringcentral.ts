/* Generated code */
import PathSegment from '../PathSegment';

export default class Content extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('content', id, prv, service);
	}

	/**
	 *  Returns call recording metadata.
	 * 
	 * Permission: ReadCallRecording
	 * Usage Plan Group: Heavy
	 */
	get(): Promise<any> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		});
	}

}
