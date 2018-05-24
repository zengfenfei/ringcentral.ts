/* Generated code */
import OrderLicensesRequest from '../definitions/OrderLicensesRequest';
import PathSegment from '../PathSegment';

export default class BulkPurchase extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('bulk-purchase', id, prv, service);
	}

	/**
	 * Purchases licenses for add-on features: 
	 * Rooms, Room Connector, Webinar, Live Reports, etc.
	 * 
	 * Permission: ReadAccounts, EditExtensions, EditAccounts
	 * API Group: Heavy
	 */
	post(body: OrderLicensesRequest): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then(res => {});
	}

}
