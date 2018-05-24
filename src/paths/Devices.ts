/* Generated code */
import PagingOnlyGroupDevices from '../definitions/PagingOnlyGroupDevices';
import PathSegment from '../PathSegment';

export default class Devices extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('devices', id, prv, service);
	}

	/**
	 * Returns the list of paging devices assigned to this group.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<PagingOnlyGroupDevices> {
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
	 * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). If not specified, the value is '100' by default
	 */
	perPage?: number;
}
