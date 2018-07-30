// This is Generated Source.
import ExtensionCallLogResponse from "../definitions/ExtensionCallLogResponse";
import UserCallLogRecord from "../definitions/UserCallLogRecord";
import PathSegment from "../PathSegment";

export default class CallLog extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-log", id, prv, service);
    }

    /**
     *  <p>Returns call log records filtered by parameters specified.</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CLG-110</td><td>Parameter [sessionId] is not allowed for usage along with parameter [extensionNumber]</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [transport] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-129</td><td>Access token corrupted</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>401</td><td>OAU-213</td><td>Token not found</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr><tr><td>429</td><td>CMN-301</td><td>Request rate exceeded</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<ExtensionCallLogResponse> {
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
     *  <p>Returns call log records filtered by parameters specified.</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CLG-110</td><td>Parameter [sessionId] is not allowed for usage along with parameter [extensionNumber]</td></tr><tr><td>400</td><td>CMN-101</td><td>Parameter [transport] value is invalid</td></tr><tr><td>401</td><td>CMN-405</td><td>Login to extension required</td></tr><tr><td>401</td><td>OAU-129</td><td>Access token corrupted</td></tr><tr><td>401</td><td>OAU-151</td><td>Authorization method not supported</td></tr><tr><td>401</td><td>OAU-213</td><td>Token not found</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr><tr><td>429</td><td>CMN-301</td><td>Request rate exceeded</td></tr> </tbody></table>								
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
     *  <p>Deletes filtered call log records.</p><h4>App Permission</h4><p>EditCallLog</p><h4>User Permission</h4><p>EditCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    delete(query?: DeleteQuery): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    }

    /**
     *  <p>Deletes filtered call log records.</p><h4>App Permission</h4><p>EditCallLog</p><h4>User Permission</h4><p>EditCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    deleteRaw(query?: DeleteQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    }

    /**
     *  <p>Returns call log records by ID.</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
     */
    get(query?: GetQuery): Promise<UserCallLogRecord> {
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
     *  <p>Returns call log records by ID.</p><h4>App Permission</h4><p>ReadCallLog</p><h4>User Permission</h4><p>ReadCallLog</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadCallLog] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCallLog] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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

export interface ListQuery {

    /**
     * Extension number of a user. If specified, returns call log for a particular extension only
     */
    extensionNumber?: string;

    /**
     * If 'True' then calls from/to blocked numbers are returned
     */
    showBlocked?: boolean;

    /**
     * Phone number of a caller/callee. If specified, returns all calls (both incoming and outcoming) with the phone number specified
     */
    phoneNumber?: string;

    /**
     * The direction for the resulting records. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: ("Inbound" | "Outbound")[];

    /**
     * 
     */
    sessionId?: string;

    /**
     * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: ("Voice" | "Fax")[];

    /**
     * Call transport type. 'PSTN' specifies that a call leg is initiated from the PSTN network provider; 'VoIP' - from an RC phone. By default this filter is disabled
     */
    transport?: ("PSTN" | "VoIP")[];

    /**
     * 
     */
    view?: "Simple" | "Detailed";

    /**
     * True should be specified to return recorded calls only
     */
    withRecording?: boolean;

    /**
     * The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;

    /**
     * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom?: string;

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * If 'True' then deleted calls are returned
     */
    showDeleted?: boolean;
}

export interface DeleteQuery {

    /**
     * The end datetime for records deletion in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;

    /**
     * 
     */
    phoneNumber?: string;

    /**
     * 
     */
    extensionNumber?: string;

    /**
     * 
     */
    type?: "Voice" | "Fax"[];

    /**
     * 
     */
    direction?: "Inbound" | "Outbound"[];

    /**
     * 
     */
    dateFrom?: string;
}

export interface GetQuery {

    /**
     * 
     */
    view?: "Simple" | "Detailed";
}
