// This is Generated Source.
import ICallLogSync from "../definitions/CallLogSync";
import PathSegment from "../PathSegment";

export default class CallLogSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-log-sync", id, prv, service);
    }

    /**
     *  <p>Synchronizes call log records</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CLG-101</td><td>Parameter [syncToken] is invalid [Sync token expired, call log was reset]</td></tr><tr><td>400</td><td>CLG-102</td><td>Parameter [syncToken] is invalid [Sync token expired, call log was reset]</td></tr><tr><td>400</td><td>CLG-104</td><td>Parameter [syncToken] is invalid [Sync token expired, call log was reset]</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [dateFrom] value is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<ICallLogSync> {
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
     *  <p>Synchronizes call log records</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CLG-101</td><td>Parameter [syncToken] is invalid [Sync token expired, call log was reset]</td></tr><tr><td>400</td><td>CLG-102</td><td>Parameter [syncToken] is invalid [Sync token expired, call log was reset]</td></tr><tr><td>400</td><td>CLG-104</td><td>Parameter [syncToken] is invalid [Sync token expired, call log was reset]</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [dateFrom] value is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
     * Type of synchronization
     */
    syncType?: ("FSync" | "ISync")[];

    /**
     * Value of syncToken property of last sync request response
     */
    syncToken?: string;

    /**
     * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment
     */
    dateFrom?: string;

    /**
     * For 'FSync' the parameter is mandatory, it limits the number of records to be returned in response. For 'ISync' it specifies with how many records to extend sync Frame to the past, the maximum number of records is 250
     */
    recordCount?: number;

    /**
     * Type of calls to be returned. The default value is 'All'
     */
    statusGroup?: ("Missed" | "All")[];
}
