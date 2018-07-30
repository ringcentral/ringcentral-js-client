// This is Generated Source.
import GetUserBusinessHoursResponse from "../definitions/GetUserBusinessHoursResponse";
import UserBusinessHoursUpdate from "../definitions/UserBusinessHoursUpdate";
import UserBusinessHoursUpdateRequest from "../definitions/UserBusinessHoursUpdateRequest";
import PathSegment from "../PathSegment";

export default class BusinessHours extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-hours", id, prv, service);
    }

    /**
     *  <p>Returns the extension user hours when answering rules are to be applied.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<GetUserBusinessHoursResponse> {
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
     *  <p>Returns the extension user hours when answering rules are to be applied.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadUserAnsweringRules] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Updates the extension user hours when answering rules are to be applied.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [ranges] value is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    put(body: UserBusinessHoursUpdateRequest): Promise<UserBusinessHoursUpdate> {
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
     *  <p>Updates the extension user hours when answering rules are to be applied.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditUserAnsweringRules</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [ranges] value is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditExtensions] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    putRaw(body: UserBusinessHoursUpdateRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
