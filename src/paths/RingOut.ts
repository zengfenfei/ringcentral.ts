/* Generated code */
import GetRingOutStatusResponse from '../definitions/GetRingOutStatusResponse';
import MakeRingOutRequest from '../definitions/MakeRingOutRequest';
import PathSegment from '../PathSegment';

export default class RingOut extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('ring-out', id, prv, service);
	}

	/**
	 * Makes a 2-leg RingOut call.
	 * 
	 * Permission: RingOut
	 * Usage Plan Group: Heavy
	 */
	post(body: MakeRingOutRequest): Promise<GetRingOutStatusResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns the status of a 2-leg RingOut call.
	 * 
	 * Permission: RingOut
	 * Usage Plan Group: Light
	 */
	get(): Promise<GetRingOutStatusResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Cancels the 2-leg RingOut call.
	 * 
	 * Permission: RingOut
	 * Usage Plan Group: Heavy
	 */
	delete(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}

}
