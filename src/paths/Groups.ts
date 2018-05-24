/* Generated code */
import GlipCreateGroup from '../definitions/GlipCreateGroup';
import GlipGroupInfo from '../definitions/GlipGroupInfo';
import GlipGroupList from '../definitions/GlipGroupList';
import PathSegment from '../PathSegment';
import BulkAssign from './BulkAssign';
import Posts from './Posts';

export default class Groups extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('groups', id, prv, service);
	}

	bulkAssign(id?: string) {
		return new BulkAssign(this, id);
	}

	posts(id?: string) {
		return new Posts(this, id);
	}

	/**
	 * Returns the list of groups associated with the user.
	 * 
	 * Permission: Glip
	 * API Group: Medium
	 */
	list(query?: ListQuery): Promise<GlipGroupList> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Creates a group.
	 * 
	 * Permission: Glip
	 * API Group: Medium
	 */
	post(body: GlipCreateGroup): Promise<GlipGroupInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns a group or few groups by ID(s). Batch request is supported.
	 * 
	 * Permission: Glip
	 * API Group: Light
	 */
	get(): Promise<GlipGroupInfo> {
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
	 * Type of a group. 'PrivateChat' is a group of 2 members. 
	 * 'Group' is a chat of 2 and more participants, the membership cannot be changed after group creation. 
	 * 'Team' is a chat of 1 and more participants, the membership can be modified in future
	 */
	type?: ('PrivateChat' | 'Group' | 'Team')[];

	/**
	 * Token of a page to be returned, see Glip Navigation Info
	 */
	pageToken?: string;

	/**
	 * Max numbers of records to be returned. The default/maximum value is 250
	 */
	recordCount?: number;
}
