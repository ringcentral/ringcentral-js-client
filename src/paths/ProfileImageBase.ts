// This is Generated Source.
import PathSegment from "../PathSegment";

export default class ProfileImage extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("profile-image", id, prv, service);
    }

    /**
     *  <p>Returns a profile image of an extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>AGW-401</td><td>Authorization header is not specified</td></tr><tr><td>401</td><td>AGW-402</td><td>Invalid Authorization header</td></tr><tr><td>403</td><td>CMN-109</td><td>Feature Profile Image Streaming is unavailable</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  <p>Returns a profile image of an extension.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>AGW-401</td><td>Authorization header is not specified</td></tr><tr><td>401</td><td>AGW-402</td><td>Invalid Authorization header</td></tr><tr><td>403</td><td>CMN-109</td><td>Feature Profile Image Streaming is unavailable</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
