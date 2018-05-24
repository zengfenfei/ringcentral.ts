/* Generated code */
import CreateSmsMessage from '../definitions/CreateSmsMessage';
import GetMessageInfoResponse from '../definitions/GetMessageInfoResponse';
import PathSegment from '../PathSegment';

export default class Sms extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('sms', id, prv, service);
	}

	/**
	 * Creates and sends new SMS message. 
	 * Sending SMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.
	 * 
	 * Permission: SMS, ReadMessages
	 * Usage Plan Group: Medium
	 */
	post(body: CreateSmsMessage): Promise<GetMessageInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
