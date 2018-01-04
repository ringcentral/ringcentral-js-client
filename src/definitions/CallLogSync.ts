// Generated Source
import CallLogRecord from "./CallLogRecord";
import SyncInfoCallLog from "./SyncInfoCallLog";

interface CallLogSync {

    /**
     * List of call log records with synchronization information. For ISync the total number of returned records is limited to 250; this includes both new records and the old ones, specified by the recordCount parameter
     */
    records?: CallLogRecord[];

    /**
     * Sync information (type, token and time)
     */
    syncInfo?: SyncInfoCallLog;
}

export default CallLogSync;
