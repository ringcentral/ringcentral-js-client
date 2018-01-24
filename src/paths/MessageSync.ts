// This is Generated Source.
import GetMessageSyncResponse from "../definitions/GetMessageSyncResponse";
import PathSegment from "../PathSegment";

export default class MessageSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("message-sync", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p><p>Provides facilities to synchronize mailbox content stored externally with server state.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    list(query?: ListQuery): Promise<GetMessageSyncResponse> {
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
     *  <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p><p>Provides facilities to synchronize mailbox content stored externally with server state.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
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
    direction?: ("Inbound" | "Outbound")[];

    /**
     * If 'True', then the latest messages per every conversation ID are returned
     */
    distinctConversations?: boolean;

    /**
     * Type for the resulting messages. If not specified, all types of messages are returned. Multiple values are accepted
     */
    messageType?: ("Fax" | "SMS" | "VoiceMail" | "Pager" | "Text")[];

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
    syncType?: ("FSync" | "ISync")[];
}
