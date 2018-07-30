// This is Generated Source.
import ActiveCallsResponse from "../definitions/ActiveCallsResponse";
import PathSegment from "../PathSegment";

export default class ActiveCalls extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("active-calls", id, prv, service);
    }

    /**
     *  <p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [direction] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<ActiveCallsResponse> {
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
     *  <p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [direction] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
     * The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: ("Inbound" | "Outbound")[];

    /**
     * 
     */
    view?: "Simple" | "Detailed";

    /**
     * Call type of a record. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: ("Voice" | "Fax")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;
}
