// This is Generated Source.
import UrlSection from "../../UrlSection";
import {MessageInfo} from "../MessageInfo";
import {SyncInfo} from "../SyncInfo";

export default class MessageSync extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("message-sync", id , prv, service);
    }

    /**
        Message Synchronization
    */
    get(query?:GetQuery): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetQuery {

    /**
     * Conversation identifier for the resulting messages. Meaningful for SMS and Pager messages only.
     */
    conversationId?: number;

    /**
     * The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom?: string;

    /**
     * The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string;

    /**
     * Direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted
     */
    direction?: "Inbound" | "Outbound";

    /**
     * If 'True', then the latest messages per every conversation ID are returned
     */
    distinctConversations?: boolean;

    /**
     * Type for the resulting messages. If not specified, all types of messages are returned. Multiple values are accepted
     */
    messageType?: "Fax" | "SMS" | "VoiceMail" | "Pager" | "Text";

    /**
     * Limits the number of records to be returned (works in combination with dateFrom and dateTo if specified)
     */
    recordCount?: number;

    /**
     * Value of syncToken property of last sync request response
     */
    syncToken?: string;

    /**
     * Type of message synchronization
     */
    syncType?: "FSync" | "ISync";
}

export interface GetResponse {

    /**
     * List of message records with synchronization information
     */
    records?: MessageInfo[];

    /**
     * Sync type, token and time
     */
    syncInfo?: SyncInfo;
}
