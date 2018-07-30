// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Content extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("content", id, prv, service);
    }

    /**
     *  <p>Returns media content of a call recording.</p><h4>App Permission</h4><p>ReadCallRecording</p><h4>User Permission</h4><p>ReadCallRecording</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>AGW-402</td><td>Invalid Authorization header</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-149</td><td>Unparsable access token</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallRecording] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>416</td><td>CMN-107</td><td>Requested range not satisfiable</td></tr> </tbody></table>								
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
     *  <p>Returns media content of a call recording.</p><h4>App Permission</h4><p>ReadCallRecording</p><h4>User Permission</h4><p>ReadCallRecording</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>401</td><td>AGW-402</td><td>Invalid Authorization header</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-149</td><td>Unparsable access token</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallRecording] permission</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr><tr><td>416</td><td>CMN-107</td><td>Requested range not satisfiable</td></tr> </tbody></table>								
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
