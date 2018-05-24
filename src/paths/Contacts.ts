/* Generated code */
import CompanyDirectoryContacts from '../definitions/CompanyDirectoryContacts';
import ContactInfo from '../definitions/ContactInfo';
import PathSegment from '../PathSegment';

export default class Contacts extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('contacts', id, prv, service);
	}

	/**
	 * Returns contact information on corporate users of federated accounts. Please note: 
	 * 1. User, DigitalUser, VirtualUser and FaxUser types are returned as User type. 
	 * 2. ApplicationExtension type is not returned. 
	 * 3. Only extensions in Enabled, Disabled and NotActivated state are returned.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Medium
	 */
	list(query?: ListQuery): Promise<CompanyDirectoryContacts> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns contact information on a particular corporate user of a federated account.
	 * 
	 * Permission: ReadAccounts<
	 * API Group: Medium
	 */
	get(): Promise<ContactInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface ListQuery {

	/**
	 * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). The possible values are: Max, all or a numeric value. If not specified, all records are returned on one page
	 */
	perPage?: number;

	/**
	 * If 'True' then only contacts of current account are returned, if 'False' then all contacts of all federation accounts are returned
	 */
	excludeFederatedContacts?: boolean;
}
