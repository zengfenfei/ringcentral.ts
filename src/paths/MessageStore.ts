/* Generated code */
import GetMessageInfoResponse from '../definitions/GetMessageInfoResponse';
import GetMessageList from '../definitions/GetMessageList';
import UpdateMessageRequest from '../definitions/UpdateMessageRequest';
import PathSegment from '../PathSegment';
import Content from './Content';

export default class MessageStore extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('message-store', id, prv, service);
	}

/**
	 * Internal identifier of a message attachment
	 */	content(id?: string) {
		return new Content(this, id);
	}

	/**
	 * Returns the list of messages from an extension mailbox.
	 * 
	 * Permission: ReadMessages
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<GetMessageList> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	delete(query?: DeleteQuery): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'delete'
		}).then(res => {});
	}


	/**
	 * Returns individual message record(s) by the given message ID(s). 
	 * The length of inbound messages is unlimited.
	 * Batch request is supported, see Batch Requests for details.
	 * 
	 * Permission: ReadMessages
	 * Usage Plan Group: Light
	 */
	get(): Promise<GetMessageInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Updates message(s) by ID(s). Batch request is supported, 
	 * see Batch Requests for details. Currently, 
	 * only the message read status updating is supported.
	 * 
	 * Permissio: EditMessages, ReadMessage
	 * Usage Plan Group: Medium
	 */
	put(body: UpdateMessageRequest): Promise<GetMessageInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface ListQuery {

	/**
	 * Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted
	 */
	availability?: ('Alive' | 'Deleted' | 'Purged')[];

	/**
	 * Specifies the conversation identifier for the resulting messages
	 */
	conversationId?: number;

	/**
	 * The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
	 */
	dateFrom?: string;

	/**
	 * The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
	 */
	dateTo?: string;

	/**
	 * The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted
	 */
	direction?: ('Inbound' | 'Outbound')[];

	/**
	 * If 'True', then the latest messages per every conversation ID are returned
	 */
	distinctConversations?: boolean;

	/**
	 * The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted
	 */
	messageType?: ('Fax' | 'SMS' | 'VoiceMail' | 'Pager' | 'Text')[];

	/**
	 * The read status for the resulting messages. Multiple values are accepted
	 */
	readStatus?: ('Read' | 'Unread')[];

	/**
	 * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). If not specified, the value is '100' by default
	 */
	perPage?: number;

	/**
	 * The phone number. If specified, messages are returned for this particular phone number only
	 */
	phoneNumber?: string;
}

export interface DeleteQuery {

	conversationId?: string[];
}
