// This is Generated Source.
import CallLogInfo from "../definitions/CallLogInfo";
import CallLogRecord from "../definitions/CallLogRecord";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class CallLog extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-log", id, prv, service);
    }

    /**
     *  Get Account Call Log
     */
    list(query?: ListQuery): Promise<PagingResult<CallLogRecord>> {
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
     *  Get Account Call Log
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
     *  Get Account Call Log Record by ID
     */
    get(): Promise<CallLogInfo> {
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
     *  Get Account Call Log Record by ID
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

    /**
     *  Delete Extension Call Log
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
     *  Delete Extension Call Log
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
}

export interface ListQuery {

    /**
     * Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter
     */
    extensionNumber?: string;

    /**
     * If 'True' then calls from/to blocked numbers are returned. The default value is 'True'
     */
    showBlocked?: boolean;

    /**
     * Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter
     */
    phoneNumber?: string;

    /**
     * The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are supported
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Internal identifier of a call session. Cannot be specified along with parameters 'dateTo'/'dateFrom'
     */
    sessionId?: string;

    /**
     * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are supported
     */
    type?: "Voice" | "Fax";

    /**
     * Call transport type. By default this filter is disabled
     */
    transport?: "PSTN" | "VoIP";

    /**
     * The default value is 'Simple' for both account and extension call log
     */
    view?: "Simple" | "Detailed";

    /**
     * 'True' if only recorded calls are returned. The default value is 'False'
     */
    withRecording?: boolean;

    /**
     * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom?: string;

    /**
     * The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. The default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default.
     */
    perPage?: number;
}

export interface DeleteQuery {

    /**
     * The end datetime for records deletion in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;
}
