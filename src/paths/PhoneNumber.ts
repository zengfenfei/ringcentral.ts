/* Generated code */
import GetExtensionPhoneNumbersResponse from '../definitions/GetExtensionPhoneNumbersResponse';
import PhoneNumberInfo from '../definitions/PhoneNumberInfo';
import PathSegment from '../PathSegment';

export default class PhoneNumber extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('phone-number', id, prv, service);
	}

	/**
	 * Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. 
	 * The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level
	 * numbers which may be used when performing different operations on behalf of this extension. 
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<GetExtensionPhoneNumbersResponse> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns info about a specific phone number, specified by ID
	 * 
	 * Required Permissions: ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(): Promise<PhoneNumberInfo> {
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
	 * Usage type of the phone number
	 */
	usageType?: ('MainCompanyNumber' | 'AdditionalCompanyNumber' | 'CompanyNumber' | 'DirectNumber' | 'CompanyFaxNumber' | 'ForwardedNumber')[];

	/**
	 * Indicates the page number to retrieve. 
	 * Only positive number values are allowed. 
	 * Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '100' by default
	 */
	perPage?: number;
}
