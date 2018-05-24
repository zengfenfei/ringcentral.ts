/* Generated code */
import ExtensionCallLogResponse from '../definitions/ExtensionCallLogResponse';
import UserCallLogRecord from '../definitions/UserCallLogRecord';
import PathSegment from '../PathSegment';

export default class CallLog extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('call-log', id, prv, service);
	}

	/**
	 * Returns call log records filtered by the specified parameters.
	 * 
	 * Permission: ReadCallLog
	 * Usage Plan Group: Heavy
	 */
	list(query?: ListQuery): Promise<ExtensionCallLogResponse> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Remove call log record by id
	 * 
	 * Permission: EditCallLog
	 * Usage Plan Group: Heavy
	 */
	delete(query?: DeleteQuery): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}

	/**
	 * Get call record by ID
	 * 
	 * Permission: ReadCallLog
	 * Usage Plan Group: Heavy
	 */
	get(query?: GetQuery): Promise<UserCallLogRecord> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface ListQuery {

	/**
	 * Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter
	 */
	extensionNumber?: string;

	/**
	 * If 'True' then calls from/to blocked numbers are returned. The default value is 'True'
	 */
	showBlocked?: boolean;

	/**
	 * Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter
	 */
	phoneNumber?: string;

	/**
	 * The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted
	 */
	direction?: ('Inbound' | 'Outbound')[];

	sessionId?: string;

	/**
	 * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted
	 */
	type?: ('Voice' | 'Fax')[];

	/**
	 * Call transport type. 'PSTN' specifies that a call leg is initiated from the PSTN network provider; 'VoIP' - from an RC phone. By default this filter is disabled
	 */
	transport?: ('PSTN' | 'VoIP')[];

	/**
	 * The default value is 'Simple' for both account and extension call log
	 */
	view?: ('Simple' | 'Detailed')[];

	/**
	 * 'True' if only recorded calls have to be returned
	 */
	withRecording?: boolean;

	/**
	 * The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
	 */
	dateTo?: string;

	/**
	 * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
	 */
	dateFrom?: string;

	/**
	 * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). If not specified, the value is '100' by default
	 */
	perPage?: number;
}

export interface DeleteQuery {

	/**
	 * The end datetime for records deletion in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
	 */
	dateTo?: string;

	phoneNumber?: string;

	extensionNumber?: string;

	type?: 'Voice' | 'Fax'[];

	direction?: 'Inbound' | 'Outbound'[];

	dateFrom?: string;
}

export interface GetQuery {

	view?: 'Simple' | 'Detailed';
}
