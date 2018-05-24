/* Generated code */
import CreateForwardingNumberRequest from '../definitions/CreateForwardingNumberRequest';
import ForwardingNumberInfo from '../definitions/ForwardingNumberInfo';
import ForwardingNumberResource from '../definitions/ForwardingNumberResource';
import GetExtensionForwardingNumberListResponse from '../definitions/GetExtensionForwardingNumberListResponse';
import UpdateForwardingNumberRequest from '../definitions/UpdateForwardingNumberRequest';
import PathSegment from '../PathSegment';

export default class ForwardingNumber extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('forwarding-number', id, prv, service);
	}

	/**
	 * Returns the list of extension phone numbers used for call forwarding and call flip. 
	 * The returned list contains all the extension phone numbers that are used for call forwarding and call flip.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<GetExtensionForwardingNumberListResponse> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Adds a new forwarding number to the forwarding number list.
	 * 
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
	 */
	post(body: CreateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	get(): Promise<ForwardingNumberResource> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Updates an existent forwarding number from the forwarding number list.
	 * 
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
	 */
	put(body: UpdateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Deletes a forwarding number from the forwarding number list by its ID.
	 * 
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
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
	 * Indicates the page number to retrieve. Only positive number values are allowed. 
	 * Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '100' by default
	 */
	perPage?: number;
}
