// This is Generated Source.
import ICallLogSync from "../definitions/CallLogSync";
import PathSegment from "../PathSegment";

export default class CallLogSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-log-sync", id, prv, service);
    }

    /**
     *  Synchronizes call log records
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
     *  Synchronizes call log records
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
