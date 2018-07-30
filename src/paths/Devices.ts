// This is Generated Source.
import PagingOnlyGroupDevices from "../definitions/PagingOnlyGroupDevices";
import PathSegment from "../PathSegment";

export default class Devices extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("devices", id, prv, service);
    }

    /**
     *  <p>Returns the list of paging devices assigned to this group.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyDevices</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<PagingOnlyGroupDevices> {
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
     *  <p>Returns the list of paging devices assigned to this group.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyDevices</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr> </tbody></table>								
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
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;
}
