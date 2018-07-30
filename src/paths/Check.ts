// This is Generated Source.
import AuthProfileCheckResource from "../definitions/AuthProfileCheckResource";
import PathSegment from "../PathSegment";

export default class Check extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("check", id, prv, service);
    }

    /**
     *  <p>Checks if a certain user permission is activated for a particular extension.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [targetExtensionId] value is invalid</td></tr><tr><td>403</td><td>CMN-404</td><td>Attempt to access another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    get(query?: GetQuery): Promise<AuthProfileCheckResource> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Checks if a certain user permission is activated for a particular extension.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [targetExtensionId] value is invalid</td></tr><tr><td>403</td><td>CMN-404</td><td>Attempt to access another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }
}

export interface GetQuery {

    /**
     * 
     */
    permissionId?: string;

    /**
     * 
     */
    targetExtensionId?: string;
}
