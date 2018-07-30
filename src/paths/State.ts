// This is Generated Source.
import GetStateInfoResponse from "../definitions/GetStateInfoResponse";
import GetStateListResponse from "../definitions/GetStateListResponse";
import PathSegment from "../PathSegment";

export default class State extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("state", id, prv, service);
    }

    /**
     *  <p>Returns all the states of a certain country</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [stateId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<GetStateListResponse> {
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
     *  <p>Returns all the states of a certain country</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [perPage] value is invalid</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [stateId] is not found</td></tr> </tbody></table>								
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
     *  <p>Returns the information on a specific state.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [stateId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<GetStateInfoResponse> {
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
     *  <p>Returns the information on a specific state.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [stateId] is not found</td></tr> </tbody></table>								
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

export interface ListQuery {

    /**
     * Internal identifier of a country
     */
    countryId?: number;

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * If 'True', the list of states with phone numbers available for buying is returned
     */
    withPhoneNumbers?: boolean;
}
