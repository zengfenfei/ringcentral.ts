/* Generated code */
import PathSegment from '../PathSegment';
import Members from './Members';
import BulkAssign from './BulkAssign';

export default class Department extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('department', id, prv, service);
	}

	/**
	 * Returns a list of members for a Call Queue (Department) extension by extension id
	 * 
	 * Permission: ReadAccounts
	 * API Group: Light
	 */
	members(id?: string) {
		return new Members(this, id);
	}
	
	/**
	 * Adds and/or removes multiple call queue members.
	 * 
	 * Permission: EditAccounts
	 * API Group: Heavy
	 */
	bulkAssign(id?: string) {
		return new BulkAssign(this, id);
	}
}
