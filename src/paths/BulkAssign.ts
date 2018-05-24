/* Generated code */
import EditGroupRequest from '../definitions/EditGroupRequest';
import GlipGroupInfo from '../definitions/GlipGroupInfo';
import PathSegment from '../PathSegment';

export default class BulkAssign extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('bulk-assign', id, prv, service);
	}

	/**
	 * Updates group members. Please note: 
	 * Only groups of 'Team' type can be updated. 
	 * Currently only one operation at a time (either adding or removal) is supported.
	 * 
	 * Permission: Glip
	 * API Group: Medium
	 */
	post(body: EditGroupRequest): Promise<GlipGroupInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
