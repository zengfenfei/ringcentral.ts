/* Generated code */
import GlipPersonInfo from '../definitions/GlipPersonInfo';
import PathSegment from '../PathSegment';

export default class Persons extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('persons', id, prv, service);
	}

	/**
	 *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Returns a user or few users by ID(s). Batch request is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
	 */
	get(): Promise<GlipPersonInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
