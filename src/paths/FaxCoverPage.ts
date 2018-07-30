// This is Generated Source.
import PathSegment from "../PathSegment";

export default class FaxCoverPage extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("fax-cover-page", id, prv, service);
    }

    /**
     *  <p>Returns fax cover pages available for the current extension.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [page] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr> </tbody></table>								
     */
    get(query?: GetQuery): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  <p>Returns fax cover pages available for the current extension.</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [page] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr> </tbody></table>								
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
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;
}
