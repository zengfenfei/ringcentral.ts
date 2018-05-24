/* Generated code */
import INotificationSettings from '../definitions/NotificationSettings';
import NotificationSettingsUpdateRequest from '../definitions/NotificationSettingsUpdateRequest';
import PathSegment from '../PathSegment';

export default class NotificationSettings extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('notification-settings', id, prv, service);
	}

	/**
	 * Returns notification settings for the current extension.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(): Promise<INotificationSettings> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Updates notification settings for the current extension.
	 * 
	 * Permission: EditExtensions
	 * Usage Plan Group: Medium
	 */
	put(body: NotificationSettingsUpdateRequest): Promise<INotificationSettings> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
