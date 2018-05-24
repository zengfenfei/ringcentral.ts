/* Generated code */
import SubscriptionInfo from '../definitions/SubscriptionInfo';
import PathSegment from '../PathSegment';

export default class Renew extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('renew', id, prv, service);
	}

	/**
	 * Renews an existent subscription by ID by posting request with an empty body.
	 * 
	 * Usage Plan Group: Medium
	 */
	post(): Promise<SubscriptionInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
