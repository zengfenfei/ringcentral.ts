/* Generated code */
import PostGlipFile from '../definitions/PostGlipFile';
import PathSegment from '../PathSegment';

export default class Files extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('files', id, prv, service);
	}

	/**
	 * Posts a file.
	 * 
	 * Permission: Glip
	 * API Group: Heavy
	 */
	post(query?: PostQuery): Promise<PostGlipFile> {
		return this.getRest().call(this.getEndpoint(true), query, {
			body: undefined,
			method: 'post'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns a file.
	 * 
	 * Permission: Glip
	 * API Group: Medium
	 */
	get(): Promise<PostGlipFile> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}

export interface PostQuery {

	/**
	 * Internal identifier of a group the post with file attached will be added to
	 */
	groupId?: string;
}
