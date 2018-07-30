// This is Generated Source.
import GetLocationListResponse from "../definitions/GetLocationListResponse";
import PathSegment from "../PathSegment";

export default class Location extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("location", id, prv, service);
    }

    /**
     *  <p>Returns all available locations for a certain state.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [orderBy] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [location] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetLocationListResponse> {
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
     *  <p>Returns all available locations for a certain state.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [orderBy] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [location] is not found</td></tr> </tbody></table>								
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
     * Sorts results by the property specified
     */
    orderBy?: ("Npa" | "City")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * Internal identifier of a state
     */
    stateId?: string;

    /**
     * Specifies if nxx codes are returned
     */
    withNxx?: boolean;
}
