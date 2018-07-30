// This is Generated Source.
import CreateForwardingNumberRequest from "../definitions/CreateForwardingNumberRequest";
import ForwardingNumberInfo from "../definitions/ForwardingNumberInfo";
import ForwardingNumberResource from "../definitions/ForwardingNumberResource";
import GetExtensionForwardingNumberListResponse from "../definitions/GetExtensionForwardingNumberListResponse";
import UpdateForwardingNumberRequest from "../definitions/UpdateForwardingNumberRequest";
import PathSegment from "../PathSegment";

export default class ForwardingNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("forwarding-number", id, prv, service);
    }

    /**
     *  <p>Returns the list of extension phone numbers used for call forwarding and call flip. The returned list contains all the extension phone numbers used for call forwarding and call flip.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-403</td><td>The feature is not available for this extension type</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetExtensionForwardingNumberListResponse> {
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
     *  <p>Returns the list of extension phone numbers used for call forwarding and call flip. The returned list contains all the extension phone numbers used for call forwarding and call flip.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-403</td><td>The feature is not available for this extension type</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
     *  <p>Adds a new forwarding number to the forwarding number list.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-180</td><td>Call handling settings not available for Fax tiers</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [phoneNumber] value is invalid</td></tr><tr><td>400</td><td>FPN-102</td><td>Label of number Work duplicates with existing forwarding number label</td></tr><tr><td>400</td><td>FPN-103</td><td>Limit of available forwarding numbers (10) exceeded</td></tr><tr><td>400</td><td>FPN-104</td><td>Limit of available custom labeled forwarding numbers (7) exceeded</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +18442015485 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-403</td><td>The feature is not available for this extension type</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    post(body: CreateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Adds a new forwarding number to the forwarding number list.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>AWR-180</td><td>Call handling settings not available for Fax tiers</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [phoneNumber] value is invalid</td></tr><tr><td>400</td><td>FPN-102</td><td>Label of number Work duplicates with existing forwarding number label</td></tr><tr><td>400</td><td>FPN-103</td><td>Limit of available forwarding numbers (10) exceeded</td></tr><tr><td>400</td><td>FPN-104</td><td>Limit of available custom labeled forwarding numbers (7) exceeded</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +18442015485 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-403</td><td>The feature is not available for this extension type</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: CreateForwardingNumberRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Returns a specific forwarding number.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-403</td><td>The feature is not available for this extension type</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<ForwardingNumberResource> {
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
     *  <p>Returns a specific forwarding number.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-403</td><td>The feature is not available for this extension type</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
     *  <p>Updates the existing forwarding number from the forwarding number list.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [flipNumber] value is invalid</td></tr><tr><td>400</td><td>FPN-102</td><td>Label of number Home duplicates with existing forwarding number label</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +18552050457 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-106</td><td>Flip number 2 is already in use</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [forwardingNumberId] is not found</td></tr> </tbody></table>								
     */
    put(body: UpdateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
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
     *  <p>Updates the existing forwarding number from the forwarding number list.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [flipNumber] value is invalid</td></tr><tr><td>400</td><td>FPN-102</td><td>Label of number Home duplicates with existing forwarding number label</td></tr><tr><td>400</td><td>FPN-105</td><td>Number +18552050457 duplicates with company/extension direct number</td></tr><tr><td>400</td><td>FPN-106</td><td>Flip number 2 is already in use</td></tr><tr><td>400</td><td>FPN-108</td><td>International calling is currently disabled</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [forwardingNumberId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: UpdateForwardingNumberRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  <p>Deletes a forwarding number from the forwarding number list by its ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>403</td><td>FPN-107</td><td>Device number cannot be deleted from the forwarding number list</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [forwardingNumberId] is not found</td></tr> </tbody></table>								
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  <p>Deletes a forwarding number from the forwarding number list by its ID.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserForwardingFlipNumbers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditUserForwardingFlipNumbers] permission for requested resource.</td></tr><tr><td>403</td><td>FPN-107</td><td>Device number cannot be deleted from the forwarding number list</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [forwardingNumberId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted.
     */
    page?: number;

    /**
     * Indicates the page size (number of items).
     */
    perPage?: number;
}
