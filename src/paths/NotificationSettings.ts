/* Generated code */
import INotificationSettings from '../definitions/NotificationSettings';
import NotificationSettingsUpdateRequest from '../definitions/NotificationSettingsUpdateRequest';
import PathSegment from '../PathSegment';

export default class NotificationSettings extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('notification-settings', id, prv, service);
	}

	/**
	 *  <p style='font-style:italic;'>Since 1.0.26 (Release 8.2)</p><p>Returns notification settings for the current extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
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
	 *  <p style='font-style:italic;'>Since 1.0.26 (Release 8.2)</p><p>Updates notification settings for the current extension.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
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
