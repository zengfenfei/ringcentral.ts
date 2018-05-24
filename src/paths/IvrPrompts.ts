/* Generated code */
import IIvrPrompts from '../definitions/IvrPrompts';
import PromptInfo from '../definitions/PromptInfo';
import PathSegment from '../PathSegment';
import Content from './Content';

export default class IvrPrompts extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('ivr-prompts', id, prv, service);
	}

/**
	 * Internal identifier of a message attachment
	 */	content(id?: string) {
		return new Content(this, id);
	}

	/**
	 * Returns a list of IVR prompts.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Medium
	 */
	list(): Promise<IIvrPrompts> {
		return this.getRest().call(this.getEndpoint(false), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns an IVR prompt by ID
	 * 
	 * Permission: ReadAccounts
	 * API Group: Medium
	 */
	get(): Promise<PromptInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Deletes an IVR prompt by ID
	 * 
	 * Permission: EditAccounts
	 * API Group: Heavy
	 */
	delete(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}

}
