/* Generated code */
import GetLocationListResponse from '../definitions/GetLocationListResponse';
import PathSegment from '../PathSegment';

export default class Location extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('location', id, prv, service);
	}

	/**
	 * Returns all the available locations for the certain state.
	 * 
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<GetLocationListResponse> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface ListQuery {

	/**
	 * Sorts results by the specified property. 
	 * The default value is 'City'
	 */
	orderBy?: ('Npa' | 'City')[];

	/**
	 * Indicates the page number to retrieve. 
	 * Only positive number values are allowed. 
	 * Default value is '1'.
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '100' by default.
	 */
	perPage?: number;

	/**
	 * Internal identifier of a state
	 */
	stateId?: string;

	/**
	 * Specifies if nxx codes are returned
	 */
	withNxx?: boolean;
}
