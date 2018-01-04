// Generated Source
import GetMessageInfoResponse from "./GetMessageInfoResponse";
import SyncInfoMessages from "./SyncInfoMessages";

interface GetMessageSyncResponse {

    /**
     * List of message records with synchronization information
     */
    records?: GetMessageInfoResponse[];

    /**
     * Sync type, token and time
     */
    syncInfo?: SyncInfoMessages;
}

export default GetMessageSyncResponse;
