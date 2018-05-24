/* Generated code */
import AnsweringRuleInfo from '../definitions/AnsweringRuleInfo';
import CompanyAnsweringRuleList from '../definitions/CompanyAnsweringRuleList';
import CreateAnsweringRuleRequest from '../definitions/CreateAnsweringRuleRequest';
import UpdateAnsweringRuleRequest from '../definitions/UpdateAnsweringRuleRequest';
import PathSegment from '../PathSegment';

export default class AnsweringRule extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('answering-rule', id, prv, service);
	}

	/**
	 * Returns the extension's answering rules.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(query?: GetQuery): Promise<void> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'get'
		}).then(res => {});
	}


	/**
	 * Creates a custom answering rule.
	 * 
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
	 */
	post(body: CreateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Updates a custom answering rule by answering rule ID.
	 * 
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
	 */
	put(body: UpdateAnsweringRuleRequest): Promise<AnsweringRuleInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

	/**
	 * Deletes a custom answering rule by answering rule ID.
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


	/**
	 * Returns a list of company answering rules.
	 * 
	 * Permission: ReadAccounts
	 * API Group: Medium
	 */
	list(): Promise<CompanyAnsweringRuleList> {
		return this.getRest().call(this.getEndpoint(false), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface GetQuery {

	page?: string;

	perPage?: string;
}
