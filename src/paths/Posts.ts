/* Generated code */
import GlipCreatePost from '../definitions/GlipCreatePost';
import GlipPostInfo from '../definitions/GlipPostInfo';
import GlipPosts from '../definitions/GlipPosts';
import PathSegment from '../PathSegment';

export default class Posts extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('posts', id, prv, service);
	}

	/**
	 * Returns list of posts.
	 * 
	 * Permission: Glip
	 * API Group: Light
	 */
	list(query?: ListQuery): Promise<GlipPosts> {
		return this.getRest().call(this.getEndpoint(false), query, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Creates a post.
	 * 
	 * Permission: Glip
	 * API Group: Light
	 */
	post(body: GlipCreatePost): Promise<GlipPostInfo> {
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
	 * Token of a page to be returned, 
	 * see Glip Navigation Info
	 */
	pageToken?: string;

	/**
	 * Max numbers of records to be returned. 
	 * The default/maximum value is 250
	 */
	recordCount?: number;
}
