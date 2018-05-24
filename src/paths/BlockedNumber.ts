/* Generated code */
import BlockedNumberInfo from '../definitions/BlockedNumberInfo';
import BlockedNumbersList from '../definitions/BlockedNumbersList';
import PathSegment from '../PathSegment';

export default class BlockedNumber extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('blocked-number', id, prv, service);
	}

	/**
	 * List of phone numbers blocked for an extension by extension id
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	list(): Promise<BlockedNumbersList> {
		return this.getRest().call(this.getEndpoint(false), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Add a number to the extension's blocked number list
	 * 
	 * Permission: EditExtensions
	 * sage Plan Group: Medium
	 */
	post(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Blocked number info by ID
	 * 
	 * Permission:ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(): Promise<BlockedNumberInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Modify blocked number record by id 
	 * 
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
	 */
	put(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Delete blocked number from extension blocked number list by id
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
