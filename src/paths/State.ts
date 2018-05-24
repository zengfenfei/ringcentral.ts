/* Generated code */
import GetStateInfoResponse from '../definitions/GetStateInfoResponse';
import GetStateListResponse from '../definitions/GetStateListResponse';
import PathSegment from '../PathSegment';

export default class State extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('state', id, prv, service);
	}

	/**
	 * Returns all the states for a certain country.
	 * 
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<GetStateListResponse> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns the information on the required state.
	 * 
	 * Usage Plan Group: Light
	 */
	get(): Promise<GetStateInfoResponse> {
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
	 * Internal identifier of a country
	 */
	countryId?: number;

	/**
	 * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). If not specified, the value is '100' by default
	 */
	perPage?: number;

	/**
	 * If 'True', the list of states with phone numbers available for buying is returned. The default value is 'False'
	 */
	withPhoneNumbers?: boolean;
}
