/* Generated code */
import ContactList from '../definitions/ContactList';
import PersonalContactResource from '../definitions/PersonalContactResource';
import PathSegment from '../PathSegment';

export default class Contact extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('contact', id, prv, service);
	}

	/**
	 * List of contact records
	 * 
	 * Permission: ReadContacts
	 * Usage Plan Group: Heavy
	 */
	list(query?: ListQuery): Promise<ContactList> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Adds a new contact
	 * 
	 * Permission: Contacts, ReadContacts
	 * Usage Plan Group: Heavy
	 */
	post(body: PersonalContactResource): Promise<PersonalContactResource> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Get specific contact information by contact id
	 * 
	 * Permission: ReadContacts
	 * Usage Plan Group: Heavy
	 */
	get(): Promise<PersonalContactResource> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Update a contact record by contact id
	 * 
	 * Permission: Contacts, ReadContacts
	 * Usage Plan Group: Heavy
	 */
	put(body: PersonalContactResource): Promise<PersonalContactResource> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Delete a contact record by contact id
	 * 
	 * Permission: Contacts, ReadContacts
	 * Usage Plan Group: Heavy
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
	 * If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive
	 */
	startsWith?: string;

	/**
	 * Sorts results by the specified property. The default is 'First Name'
	 */
	sortBy?: ('FirstName' | 'LastName' | 'Company')[];

	/**
	 * Indicates the page number to retrieve. Only positive number values are allowed. 
	 * Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '100' by default
	 */
	perPage?: number;

	phoneNumber?: string[];
}
