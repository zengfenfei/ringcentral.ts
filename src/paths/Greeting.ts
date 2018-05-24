/* Generated code */
import CustomCompanyGreetingInfo from '../definitions/CustomCompanyGreetingInfo';
import CustomGreetingRequest from '../definitions/CustomGreetingRequest';
import DictionaryGreetingInfo from '../definitions/DictionaryGreetingInfo';
import DictionaryGreetingList from '../definitions/DictionaryGreetingList';
import PathSegment from '../PathSegment';

export default class Greeting extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('greeting', id, prv, service);
	}

	/**
	 * Returns a list of predefined standard greetings. 
	 * Please note: Custom greetings recorded by user are not returned in response to this request. 
	 * See Get Extension Custom Greetings.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	list(query?: ListQuery): Promise<DictionaryGreetingList> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns a standard greeting by ID
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Medium
	 */
	get(): Promise<DictionaryGreetingInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	post(body: CustomGreetingRequest): Promise<CustomCompanyGreetingInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface ListQuery {

	/**
	 * Indicates the page number to retrieve. 
	 * Only positive number values are allowed. Default value is '1'
	 */
	page?: number;

	/**
	 * Indicates the page size (number of items). 
	 * If not specified, the value is '100' by default
	 */
	perPage?: number;

	/**
	 * Type of a greeting, specifying the case when the greeting is played
	 */
	type?: 'Introductory' | 'Announcement' | 'ConnectingMessage' | 'ConnectingAudio' | 'Voicemail' | 'Unavailable' | 'HoldMusic' | 'Company';

	/**
	 * Usage type of a greeting, specifying if the greeting is applied for user extension or department extension
	 */
	usageType?: 'UserExtensionAnsweringRule' | 'ExtensionAnsweringRule' | 'DepartmentExtensionAnsweringRule' | 'CompanyAnsweringRule' | 'CompanyAfterHoursAnsweringRule';
}
