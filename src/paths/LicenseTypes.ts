/* Generated code */
import ILicenseTypes from '../definitions/LicenseTypes';
import PathSegment from '../PathSegment';

export default class LicenseTypes extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('license-types', id, prv, service);
	}

	/**
	 * Returns supported license types.
	 * 
	 * API Group: Light
	 */
	list(): Promise<ILicenseTypes> {
		return this.getRest().call(this.getEndpoint(false), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
