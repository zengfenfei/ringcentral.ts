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
	 *  <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p><p>Returns the list of extension phone numbers used for call forwarding and call flip. The returned list contains all the extension phone numbers that are used for call forwarding and call flip.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
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
	 *  <p style='font-style:italic;'>Since 1.0.12 (Release 6.4)</p><p>Adds a new forwarding number to the forwarding number list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
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
	 *  <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p><p>Updates an existent forwarding number from the forwarding number list.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
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
	 *  <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p><p>Deletes a forwarding number from the forwarding number list by its ID.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
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
	 * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). If not specified, the value is '100' by default
	 */
	perPage?: number;
}
