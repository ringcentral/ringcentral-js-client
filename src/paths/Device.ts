// This is Generated Source.
import AccountDeviceUpdate from "../definitions/AccountDeviceUpdate";
import DeviceResource from "../definitions/DeviceResource";
import GetAccountDevicesResponse from "../definitions/GetAccountDevicesResponse";
import GetDeviceInfoResponse from "../definitions/GetDeviceInfoResponse";
import PathSegment from "../PathSegment";

export default class Device extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("device", id, prv, service);
    }

    /**
     *  <p>Returns a list of company devices.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyDevices</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [page] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCompanyDevices] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetAccountDevicesResponse> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns a list of company devices.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyDevices</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [page] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCompanyDevices] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }

    /**
     *  <p>Returns account device(s) by their ID(s).</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyDevices</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [deviceId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<GetDeviceInfoResponse> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns account device(s) by their ID(s).</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyDevices</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [deviceId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  <p>Updates account device(s) by their ID(s).</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyDevices</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [extensionId] value is invalid</td></tr><tr><td>400</td><td>DEV-140</td><td>Free phone line in not available for selected country</td></tr><tr><td>400</td><td>DEV-151</td><td>Invalid phone number for phone line</td></tr><tr><td>400</td><td>DEV-154</td><td>Phone number change is not available when new phone type is one of the (DedicatedFax, FaxOnly)</td></tr><tr><td>400</td><td>DEV-156</td><td>Phone number change is not allowed when new number is toll free</td></tr><tr><td>400</td><td>DEV-217</td><td>Hot desking is not available for device model</td></tr><tr><td>400</td><td>ORD-104</td><td>Hot desking device ordering is not available for current account</td></tr><tr><td>403</td><td>BIL-102</td><td>Limit of FreeSoftPhoneLines exceeded</td></tr><tr><td>403</td><td>CMN-112</td><td>Feature [FreeSoftPhoneLines] is not available for current extension type</td></tr><tr><td>403</td><td>CMN-113</td><td>Feature [FreeSoftPhoneLines] is not available for current extension</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-404</td><td>Attempt to access another extension</td></tr><tr><td>403</td><td>DEV-102</td><td>Device already assigned</td></tr><tr><td>403</td><td>DEV-130</td><td>Attempt to update device of another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [deviceId] is not found</td></tr><tr><td>409</td><td>CMN-204</td><td>Resource is blocked by another operation</td></tr><tr><td>409</td><td>DEV-127</td><td>Unknown device update use case</td></tr><tr><td>409</td><td>DEV-129</td><td>Cannot update E911 address of unassigned device</td></tr><tr><td>501</td><td>DEV-158</td><td>Phone number is associated with device</td></tr> </tbody></table>								
     */
    put(body: AccountDeviceUpdate): Promise<DeviceResource> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Updates account device(s) by their ID(s).</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyDevices</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [extensionId] value is invalid</td></tr><tr><td>400</td><td>DEV-140</td><td>Free phone line in not available for selected country</td></tr><tr><td>400</td><td>DEV-151</td><td>Invalid phone number for phone line</td></tr><tr><td>400</td><td>DEV-154</td><td>Phone number change is not available when new phone type is one of the (DedicatedFax, FaxOnly)</td></tr><tr><td>400</td><td>DEV-156</td><td>Phone number change is not allowed when new number is toll free</td></tr><tr><td>400</td><td>DEV-217</td><td>Hot desking is not available for device model</td></tr><tr><td>400</td><td>ORD-104</td><td>Hot desking device ordering is not available for current account</td></tr><tr><td>403</td><td>BIL-102</td><td>Limit of FreeSoftPhoneLines exceeded</td></tr><tr><td>403</td><td>CMN-112</td><td>Feature [FreeSoftPhoneLines] is not available for current extension type</td></tr><tr><td>403</td><td>CMN-113</td><td>Feature [FreeSoftPhoneLines] is not available for current extension</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-404</td><td>Attempt to access another extension</td></tr><tr><td>403</td><td>DEV-102</td><td>Device already assigned</td></tr><tr><td>403</td><td>DEV-130</td><td>Attempt to update device of another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [deviceId] is not found</td></tr><tr><td>409</td><td>CMN-204</td><td>Resource is blocked by another operation</td></tr><tr><td>409</td><td>DEV-127</td><td>Unknown device update use case</td></tr><tr><td>409</td><td>DEV-129</td><td>Cannot update E911 address of unassigned device</td></tr><tr><td>501</td><td>DEV-158</td><td>Phone number is associated with device</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: AccountDeviceUpdate): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Device serial number
     */
    serial?: string;

    /**
     * Device feature or multiple features supported
     */
    feature?: "Intercom" | "Paging" | "BLA";
}
