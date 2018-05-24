/* Generated code */
import LanguageInfo from '../definitions/LanguageInfo';
import LanguageList from '../definitions/LanguageList';
import PathSegment from '../PathSegment';

export default class Language extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('language', id, prv, service);
	}

	/**
	 * Returns the information about supported languages.
	 * 
	 * Usage Plan Group: Light
	 */
	list(): Promise<LanguageList> {
		return this.getRest().call(this.getEndpoint(false), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns language by its respective ID.
	 * 
	 * Usage Plan Group: Light
	 */
	get(): Promise<LanguageInfo> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
