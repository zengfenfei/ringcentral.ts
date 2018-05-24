/* Generated code */
import BotExtensionCreation from '../definitions/BotExtensionCreation';
import BotExtensionCreationRequest from '../definitions/BotExtensionCreationRequest';
import PathSegment from '../PathSegment';

export default class Bot extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('bot', id, prv, service);
	}

	/**
	 * Creates a bot extension. Please note: 
	 * Bot extension is always created in Enabled status, no welcome email is sent.
	 * 
	 * Permission: EditAccounts
	 * API Group: Medium
	 */
	post(body: BotExtensionCreationRequest): Promise<BotExtensionCreation> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
