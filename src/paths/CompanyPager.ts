/* Generated code */
import CreatePagerMessageRequest from '../definitions/CreatePagerMessageRequest';
import GetMessageInfoResponse from '../definitions/GetMessageInfoResponse';
import PathSegment from '../PathSegment';

export default class CompanyPager extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('company-pager', id, prv, service);
	}

	/**
	 * Creates and sends a pager message.
	 * 
	 * Permission: InternalMessages, ReadMessages
	 * Usage Plan Group: Medium
	 */
	post(body: CreatePagerMessageRequest): Promise<GetMessageInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
