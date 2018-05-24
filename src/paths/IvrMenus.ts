/* Generated code */
import IvrMenuInfo from '../definitions/IvrMenuInfo';
import PathSegment from '../PathSegment';

export default class IvrMenus extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('ivr-menus', id, prv, service);
	}

	/**
	 * Returns a company IVR menu by ID
	 * 
	 * Permission: ReadAccounts
	 * API Group: Medium
	 */
	get(): Promise<IvrMenuInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
