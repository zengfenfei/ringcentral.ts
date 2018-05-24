/* Generated code */
import GetCallRecordingResponse from '../definitions/GetCallRecordingResponse';
import PathSegment from '../PathSegment';
import Content from './Content';

export default class Recording extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('recording', id, prv, service);
	}

/**
	 * Internal identifier of a message attachment
	 */	content(id?: string) {
		return new Content(this, id);
	}

	/**
	 * Returns call recording metadata.
	 * 
	 * Permission: ReadCallRecording
	 * Usage Plan Group: Heavy
	 */
	get(): Promise<GetCallRecordingResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
