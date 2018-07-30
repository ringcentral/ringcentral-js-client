// This is Generated Source.
import AuthProfileResource from "../definitions/AuthProfileResource";
import PathSegment from "../PathSegment";
import Check from "./Check";

export default class AuthzProfile extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("authz-profile", id, prv, service);
    }

    /**
     * 
     */
    check(id?: string) {
        return new Check(this, id);
    }

    /**
     *  <p>Returns a list of user permissions granted at authorization procedure. Please note: Some permissions may be restricted by extension type.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-404</td><td>Attempt to access another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<AuthProfileResource> {
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
     *  <p>Returns a list of user permissions granted at authorization procedure. Please note: Some permissions may be restricted by extension type.</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-404</td><td>Attempt to access another extension</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
}
