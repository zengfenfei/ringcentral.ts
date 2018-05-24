/* Generated code */
import CreateSipRegistrationRequest from '../definitions/CreateSipRegistrationRequest';
import CreateSipRegistrationResponse from '../definitions/CreateSipRegistrationResponse';
import PathSegment from '../PathSegment';

export default class SipProvision extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('sip-provision', id, prv, service);
	}

	/**
	 * Creates SIP registration of a device/application (WebPhone, Mobile, softphone)
	 * 
	 * Permission: VoipCalling
	 * API Group: Heavy
	 */
	post(body: CreateSipRegistrationRequest): Promise<CreateSipRegistrationResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
