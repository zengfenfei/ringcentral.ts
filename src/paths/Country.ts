/* Generated code */
import GetCountryInfoDictionaryResponse from '../definitions/GetCountryInfoDictionaryResponse';
import GetCountryListResponse from '../definitions/GetCountryListResponse';
import PathSegment from '../PathSegment';

export default class Country extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('country', id, prv, service);
	}

	/**
	 * Returns all the countries available for calling.
	 * 
	 * Permission: None
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<GetCountryListResponse> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns the information on the required country.
	 * 
	 * Permission: None
	 * Usage Plan Group: Light
	 */
	get(): Promise<GetCountryInfoDictionaryResponse> {
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
	 * Specifies whether login with the phone numbers of this country is enabled or not
	 */
	loginAllowed?: boolean;

	/**
	 * Indicates whether signup/billing is allowed for a country. 
	 * If not specified all countries are returned (according to other filters specified if any)
	 */
	signupAllowed?: boolean;

	/**
	 * Specifies if RingCentral sells phone numbers of this country
	 */
	numberSelling?: boolean;

	/**
	 * Indicates the page number to retrieve. 
	 * Only positive number values are allowed. Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '100' by default
	 */
	perPage?: number;

	/**
	 * Specifies if free phone line for softphone is available for a country or not
	 */
	freeSoftphoneLine?: boolean;
}
