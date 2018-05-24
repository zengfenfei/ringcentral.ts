/* Generated code */
import ExtensionCallerIdInfo from '../definitions/ExtensionCallerIdInfo';
import PathSegment from '../PathSegment';

export default class CallerId extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('caller-id', id, prv, service);
	}

	/**
	 * Returns information on an outbound caller ID of an extension.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Light
	 */
	get(): Promise<ExtensionCallerIdInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Updates outbound caller ID information of an extension.
	 * 
	 * Permission: EditExtensions
	 * API Group: Medium
	 */
	put(body: ExtensionCallerIdInfo): Promise<ExtensionCallerIdInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
