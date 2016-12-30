// This is Generated Source.
import CallLogRecord from "../definitions/CallLogRecord";
import SyncInfo from "../definitions/SyncInfo";
import PathSegment from "../PathSegment";

export default class CallLogSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-log-sync", id, prv, service);
    }

    /**
     *  Call Log Synchronization
     */
    get(query?: GetQuery): Promise<GetResponse> {
        return this._send("get", true, undefined, query).then((res) => {
            return res.json();
        });
    }
}

export interface GetQuery {

    /**
     * Type of synchronization. 'FSync' is a default value
     */
    syncType?: "FSync" | "ISync";

    /**
     * Value of syncToken property of last sync request response
     */
    syncToken?: string;

    /**
     * The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment
     */
    dateFrom?: string;

    /**
     * For FSync the parameter is mandatory, it limits the number of records to be returned in response. For ISync it specifies with how many records to extend sync Frame to the past, the maximum number of records is 250
     */
    recordCount?: number;

    /**
     * Type of calls to be returned. The default value is 'All'
     */
    statusGroup?: "Missed" | "All";
}

export interface GetResponse {

    /**
     * List of call log records with synchronization information. For ISync the total number of returned records is limited to 250; this includes both new records and the old ones, specified by the recordCount parameter
     */
    records?: CallLogRecord[];

    /**
     * Sync type, token and time
     */
    syncInfo?: SyncInfo;
}
