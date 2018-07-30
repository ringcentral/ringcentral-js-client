// This is Generated Source.
import GetMessageSyncResponse from "../definitions/GetMessageSyncResponse";
import PathSegment from "../PathSegment";

export default class MessageSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("message-sync", id, prv, service);
    }

    /**
     *  <p>Synchronizes messages.</p><h4>App Permission</h4><p>ReadMessages</p><h4>User Permission</h4><p>ReadMessages</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [messageType] value is invalid</td></tr><tr><td>400</td><td>MSG-333</td><td>Parameter [syncToken] is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadMessages] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadMessages] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
     *  <p>Synchronizes messages.</p><h4>App Permission</h4><p>ReadMessages</p><h4>User Permission</h4><p>ReadMessages</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>CMN-101</td><td>Parameter [messageType] value is invalid</td></tr><tr><td>400</td><td>MSG-333</td><td>Parameter [syncToken] is invalid</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadMessages] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadMessages] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [extensionId] is not found</td></tr> </tbody></table>								
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
