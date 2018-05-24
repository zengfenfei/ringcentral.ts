/* Generated code */
import CreateSubscriptionRequest from '../definitions/CreateSubscriptionRequest';
import ModifySubscriptionRequest from '../definitions/ModifySubscriptionRequest';
import RecordsCollectionResourceSubscriptionResponse from '../definitions/RecordsCollectionResourceSubscriptionResponse';
import SubscriptionInfo from '../definitions/SubscriptionInfo';
import PathSegment from '../PathSegment';
import Renew from './Renew';

export default class Subscription extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('subscription', id, prv, service);
	}

	renew(id?: string) {
		return new Renew(this, id);
	}

	list(): Promise<RecordsCollectionResourceSubscriptionResponse> {
		return this.getRest().call(this.getEndpoint(false), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Creates a new subscription.
	 * 
	 * Usage Plan Group: Medium
	 */
	post(body: CreateSubscriptionRequest): Promise<SubscriptionInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns the requested subscription.
	 * 
	 * Usage Plan Group: Light
	 */
	get(): Promise<SubscriptionInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Renews the existent subscription if the request body is empty.
	 * If event filters are specified, calling this method modifies the event filters for the existing subscription. 
	 * The client application can extend or narrow the events for which it receives notifications in the frame of one subscription.
	 * 
	 * Usage Plan Group: Medium
	 */
	put(body: ModifySubscriptionRequest, query?: PutQuery): Promise<SubscriptionInfo> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Cancels the existent subscription.
	 * 
	 * Usage Plan Group: Medium
	 */
	delete(): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}

}

export interface PutQuery {

	/**
	 * If 'True' then aggregated presence status is returned in a notification payload
	 */
	aggregated?: boolean;
}
