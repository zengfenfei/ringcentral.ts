/* Generated code */
import LicenseInfo from '../definitions/LicenseInfo';
import LicenseList from '../definitions/LicenseList';
import PathSegment from '../PathSegment';
import BulkPurchase from './BulkPurchase';

export default class Licenses extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('licenses', id, prv, service);
	}

	bulkPurchase(id?: string) {
		return new BulkPurchase(this, id);
	}

	/**
	 * Returns list of licenses for a specific user.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Light
	 */
	list(query?: ListQuery): Promise<LicenseList> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns license information by its ID.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Light
	 */
	get(): Promise<LicenseInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Removes a license for a specific user. 
	 * Please note: It is not allowed to remove assigned licenses (only Webinars and Large Meetings can be assigned).
	 * 
	 * Permission: ReadAccounts, EditExtensions, EditAccounts
	 * API Group: Medium
	 */
	delete(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}

}

export interface ListQuery {

	/**
	 * Indicates the page number to retrieve. 
	 * Only positive number values are allowed. 
	 * The default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '25' by default
	 */
	perPage?: number;

	/**
	 * Internal identifier of a license type. 
	 * If not specified account licenses of all types are returned
	 */
	typeId?: number;
}
