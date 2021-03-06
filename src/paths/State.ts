/* Generated code */
import GetStateInfoResponse from '../definitions/GetStateInfoResponse';
import GetStateListResponse from '../definitions/GetStateListResponse';
import PathSegment from '../PathSegment';

export default class State extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('state', id, prv, service);
	}

	/**
	 *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the states for a certain country.</p><h4>Usage Plan Group</h4><p>Light</p>
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
	 *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns the information on the required state.</p><h4>Usage Plan Group</h4><p>Light</p>
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
