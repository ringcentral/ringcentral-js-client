// This is Generated Source.
import GetExtensionGrantListResponse from "../definitions/GetExtensionGrantListResponse";
import PathSegment from "../PathSegment";

export default class Grant extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("grant", id, prv, service);
    }

    /**
     *  <p>Returns the list of extension grants.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadExtensionGrant] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetExtensionGrantListResponse> {
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
     *  <p>Returns the list of extension grants.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadExtensionGrant] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
}

export interface ListQuery {

    /**
     * 
     */
    page?: string;

    /**
     * 
     */
    perPage?: string;
}
