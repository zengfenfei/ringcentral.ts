/* Generated code */
import GetTimezoneInfoResponse from '../definitions/GetTimezoneInfoResponse';
import GetTimezoneListResponse from '../definitions/GetTimezoneListResponse';
import PathSegment from '../PathSegment';

export default class Timezone extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('timezone', id, prv, service);
	}

	/**
	 * Returns all available timezones.
	 * 
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<GetTimezoneListResponse> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns the information on a certain timezone.
	 * 
	 * Usage Plan Group: Light
	 */
	get(query?: GetQuery): Promise<GetTimezoneInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface ListQuery {

	/**
	 * Indicates the page number to retrieve. 
	 * Only positive number values are allowed. 
	 * Default value is '1'
	 */
	page?: string;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '100' by default
	 */
	perPage?: string;
}

export interface GetQuery {

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
