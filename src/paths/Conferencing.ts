/* Generated code */
import GetConferencingInfoResponse from '../definitions/GetConferencingInfoResponse';
import UpdateConferencingInfoRequest from '../definitions/UpdateConferencingInfoRequest';
import PathSegment from '../PathSegment';

export default class Conferencing extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('conferencing', id, prv, service);
	}

	/**
	 * Returns the information on the Free Conference Calling (FCC) feature for a given extension.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(query?: GetQuery): Promise<GetConferencingInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
	 */
	put(body: UpdateConferencingInfoRequest): Promise<GetConferencingInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface GetQuery {

	/**
	 * Internal identifier of a country. 
	 * If not specified, the response is returned for the brand country
	 */
	countryId?: string;
}
