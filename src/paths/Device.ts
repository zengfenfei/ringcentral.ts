/* Generated code */
import AccountDeviceUpdate from '../definitions/AccountDeviceUpdate';
import DeviceResource from '../definitions/DeviceResource';
import GetAccountDevicesResponse from '../definitions/GetAccountDevicesResponse';
import GetDeviceInfoResponse from '../definitions/GetDeviceInfoResponse';
import PathSegment from '../PathSegment';

export default class Device extends PathSegment {
	constructor(prv: PathSegment, id?: string, service?) {
		super('device', id, prv, service);
	}

	/**
	 * Returns all the devices for a particular extension.
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	list(): Promise<GetAccountDevicesResponse> {
		return this.getRest().call(this.getEndpoint(false), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}


	/**
	 * Returns account device(s) by their ID(s).
	 * 
	 * Permission: ReadAccounts
	 * Usage Plan Group: Light
	 */
	get(): Promise<GetDeviceInfoResponse> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: undefined,
			method: 'get'
		}).then<any>((res) => {
				return res.json();
		});
	}

	/**
	 * Updates a device's E911 address.
	 * 
	 * Permission: EditAccounts
	 * Usage Plan Group: 
	 */
	put(body: AccountDeviceUpdate): Promise<DeviceResource> {
		return this.getRest().call(this.getEndpoint(true), undefined, {
			body: body,
			method: 'put'
		}).then<any>((res) => {
				return res.json();
		});
	}

}
