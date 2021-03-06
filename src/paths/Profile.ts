/* Generated code */
import GlipUnreadMessageCount from '../definitions/GlipUnreadMessageCount';
import PathSegment from '../PathSegment';

export default class Profile extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('profile', id, prv, service);
	}

	/**
	 *  <p style='font-style:italic;'>Since 1.0.30 (Release 9.1)</p><p>Returns Glip unread message count.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
	 */
	get(query?: GetQuery): Promise<GlipUnreadMessageCount> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface GetQuery {

	/**
	 * List of attributes to be returned. To return unread message count 'unreadPostsCount' and 'tooManyUnreadPosts' should be specified
	 */
	fields?: string;
}
