/* Generated code */
import GlipUnreadMessageCount from '../definitions/GlipUnreadMessageCount';
import PathSegment from '../PathSegment';

export default class Profile extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('profile', id, prv, service);
	}

	/**
	 * Returns Glip unread message count.
	 * 
	 * Permission: Glip
	 * API Group: Light
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
	 * List of attributes to be returned. 
	 * To return unread message count 'unreadPostsCount' and 
	 * 'tooManyUnreadPosts' should be specified
	 */
	fields?: string;
}
