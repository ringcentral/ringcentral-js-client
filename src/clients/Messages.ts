/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import messageinfo = require('../models/MessageInfo');
import createpagermessagerequest = require('../models/CreatePagerMessageRequest');
import createsmsmessage = require('../models/CreateSMSMessage');
import messagelist = require('../models/MessageList');
import updatemessagerequest = require('../models/UpdateMessageRequest');
import messagesync = require('../models/MessageSync');

export class Messages extends client.Client {

    /**
     * Create Pager Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends a pager message.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>InternalMessages</td>
     *             <td>Sending and receiving intra-company text messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    sendInternalMessage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':createpagermessagerequest.CreatePagerMessageRequest;
    }):Promise<messageinfo.MessageInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager', options, sendInternalMessageOptions),
                         messageinfo.MessageInfo);

    }

    /**
     * Create Fax Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends/resends new fax message. Resend can be done if sending failed.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>Faxes</td>
     *             <td>Sending and receiving faxes</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    sendFaxMessage(options?:{
        /** Internal identifier of a RingCentral account (integer) or tilde (~) to indicate the account which was logged-in within the current session. */
        'accountId':string;
        /** Internal identifier of an extension (integer) or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** This form fills out this required field automatically using the example MIME boundary string. */
        'Content-Type'?:string;
        /** Actual content length. This form fills out this required field automatically. */
        'Content-Length'?:string;
        /** Multi-part MIME consisting of one part JSON body and one part text. For the MIME boundary, in this UI, use "Boundary_1_14413901_1361871080888". JSON body values: <table class="tabular-description"><tr class="first property row" style="border-top: 1px solid #e8e8e8"><td class="property-name">Property</td><td class="property-value">to</td></tr><tr class="row"><td class="property-name">Data type</td><td class="property-value">Contact Info object</td></tr><tr class="last property row"><td class="property-name">Description</td><td class="property-value">Recipient information. <b>phoneNumber</b> property is mandatory</td></tr><tr class="first property row" style="border-top: 1px solid #e8e8e8"><td class="property-name">Property</td><td class="property-value">resolution</td></tr><tr class="row"><td class="property-name">Data type</td><td class="property-value"><select><option>High</option><option>Low</option></select></td></tr><tr class="last property row"><td class="property-name">Description</td><td class="property-value">Fax resolution</td></tr><tr class="first property row" style="border-top: 1px solid #e8e8e8"><td class="property-name">Property</td><td class="property-value">sendTime</td></tr><tr class="row"><td class="property-name">Data type</td><td class="property-value">datetime</td></tr><tr class="last property row"><td class="property-name">Description</td><td class="property-value">Optional. Timestamp to send fax at. If not specified (current or the past),the faxissent immediately</td></tr><tr class="first property row" style="border-top: 1px solid #e8e8e8"><td class="property-name">Property</td><td class="property-value">coverIndex</td></tr><tr class="row"><td class="property-name">Data type</td><td class="property-value">Integer (0-13)<br><select><option>0 (none - no cover page)</option><option>1 ("Ancient" cover page)</option><option>2 ("Birthday" cover page)</option><option>3 ("Blank" cover page)</option><option>4 ("Clasmod" cover page)</option><option>5 ("Classic" cover page)</option><option>6 ("Confidential" cover page)</option><option>7 ("Contempo" cover page)</option><option>8 ("Elegant" cover page)</option><option>9 ("Express" cover page)</option><option>10 ("Formal" cover page)</option><option>11 ("Jazzy" cover page)</option><option>12 ("Modern" cover page)</option><option>13 ("Urgent" cover page)</option></select></td></tr><tr class="last property row"><td class="property-name">Description</td><td class="property-value">Optional. Cover page index. If not specified, the default coverpagewhichisconfigured in "Outbound FaxSettings" is attached. See also "Available Cover Pages" tablebelow</td></tr><tr class="first property row" style="border-top: 1px solid #e8e8e8"><td class="property-name">Property</td><td class="property-value">coverPageText</td></tr><tr class="row"><td class="property-name">Data type</td><td class="property-value">string</td></tr><tr class="last property row"><td class="property-name">Description</td><td class="property-value">Optional. Cover page text, entered by the fax sender and printed on thecoverpage.Maximum length is limited to 1024 symbols</td></tr></table> */
        'body'?:string;
    }):Promise<messageinfo.MessageInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax', options, sendFaxMessageOptions),
                         messageinfo.MessageInfo);

    }

    /**
     * Create SMS Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends new SMS message. Sending SMS messages simultaneously to different recipients is limited up to 50 requests per minute; relevant for all client applications.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>SMS</td>
     *             <td>Sending and receiving SMS (text) messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    sendSMS(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':createsmsmessage.CreateSMSMessage;
    }):Promise<messageinfo.MessageInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms', options, sendSMSOptions),
                         messageinfo.MessageInfo);

    }

    /**
     * Get Message List
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns the list of messages from an extension mailbox.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listMessages(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted, collection: multi */
        'availability'?:IListMessagesAvailability;
        /** Specifies the conversation identifier for the resulting messages */
        'conversationId'?:number;
        /** The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours */
        'dateFrom'?:string;
        /** The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time */
        'dateTo'?:string;
        /** The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted, collection: multi */
        'direction'?:IListMessagesDirection;
        /** If 'True', then the latest messages per every conversation ID are returned */
        'distinctConversations'?:boolean;
        /** The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted, collection: multi */
        'messageType'?:IListMessagesMessageType;
        /** The read status for the resulting messages. Multiple values are accepted, collection: multi */
        'readStatus'?:IListMessagesReadStatus;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
        /** The phone number. If specified, messages are returned for this particular phone number only */
        'phoneNumber'?:string;
    }):Promise<messagelist.MessageList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store', options, listMessagesOptions),
                         messagelist.MessageList);

    }

    /**
     * Get Message(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns individual message record(s) by the given message ID(s). The length of inbound messages is unlimited. Batch request is supported, see Batch Requests for details.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadMessage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message */
        'messageId':number;
    }):Promise<messageinfo.MessageInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, loadMessageOptions),
                         messageinfo.MessageInfo);

    }

    /**
     * Update Message(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Updates message(s) by ID(s). Batch request is supported, see Batch Requests for details. Currently, only the message read status updating is supported.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>EditMessages</td>
     *             <td>Viewing and updating user messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    updateMessage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message */
        'messageId':string;
        /** JSON body */
        'body':updatemessagerequest.UpdateMessageRequest;
    }):Promise<messageinfo.MessageInfo> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, updateMessageOptions),
                         messageinfo.MessageInfo);

    }

    /**
     * Delete Message(s) by ID
     *
     * <p style='font-style:italic;'></p>
     * <p>Deletes message(s) by the given message ID(s). The first call of this method transfers the message to the 'Delete' status. The second call transfers the deleted message to the 'Purged' status. If it is required to make the message 'Purged' immediately
     *     (from the first call), then set the query parameter purge to 'True'. Batch request is supported.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>EditMessages</td>
     *             <td>Viewing and updating user messages</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    deleteMessage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message */
        'messageId':string;
        /** If the value is 'True', then the message is purged immediately with all the attachments. The default value is 'False' */
        'purge'?:boolean;
        /** Internal identifier of a message thread */
        'conversationId'?:number;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, deleteMessageOptions),
                         null);

    }

    /**
     * Get Message Attachment
     *
     * <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p>
     * <p>Returns particular message attachment data as a media stream.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    loadMessageAttachment(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message attachment */
        'attachmentId':string;
        /** Internal identifier of a message */
        'messageId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}', options, loadMessageAttachmentOptions),
                         null);

    }

    /**
     * Get Message Sync
     *
     * <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p>
     * <p>Provides facilities to synchronize mailbox content stored externally with server state.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadMessages</td>
     *             <td>Viewing user messages</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    syncMessages(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Conversation identifier for the resulting messages. Meaningful for SMS and Pager messages only. */
        'conversationId'?:number;
        /** The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours */
        'dateFrom'?:string;
        /** The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time */
        'dateTo'?:string;
        /** Direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted, collection: multi */
        'direction'?:ISyncMessagesDirection;
        /** If 'True', then the latest messages per every conversation ID are returned */
        'distinctConversations'?:boolean;
        /** Type for the resulting messages. Is supported for FSync only, in ISync the message type which is encrypted in 'syncToken' is used. If not specified, all types of messages are returned. Multiple values are accepted, collection: multi */
        'messageType'?:ISyncMessagesMessageType;
        /** Limits the number of records to be returned (works in combination with dateFrom and dateTo if specified) */
        'recordCount'?:number;
        /** Value of syncToken property of last sync request response */
        'syncToken'?:string;
        /** Type of message synchronization, collection: multi */
        'syncType'?:ISyncMessagesSyncType;
    }):Promise<messagesync.MessageSync> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync', options, syncMessagesOptions),
                         messagesync.MessageSync);

    }

}

/**
 * Definition of options for sendInternalMessage operation
 */
export var sendInternalMessageOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "createpagermessagerequest.CreatePagerMessageRequest"
    }
];

/**
 * Definition of options for sendFaxMessage operation
 */
export var sendFaxMessageOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "in": "path",
        "notes": "",
        "paramType": "path",
        "defaultValue": "~",
        "required": true,
        "allowMultiple": false,
        "type": "string"
    },
    {
        "name": "extensionId",
        "in": "path",
        "notes": "",
        "paramType": "path",
        "defaultValue": "~",
        "required": true,
        "allowMultiple": false,
        "type": "string"
    },
    {
        "name": "Content-Type",
        "in": "header",
        "default": "multipart/mixed; boundary=Boundary_1_14413901_1361871080888",
        "type": "string"
    },
    {
        "name": "Content-Length",
        "in": "header",
        "default": "",
        "type": "string"
    },
    {
        "name": "body",
        "in": "body",
        "consumes": [
            "multipart/mixed; boundary=Boundary_1_14413901_1361871080888"
        ],
        "default": "--Boundary_1_14413901_1361871080888\nContent-Type: application/json\n\n{\n  \"to\":[{\"phoneNumber\":\"18005630003\"}],\n  \"faxResolution\":\"High\",\n  \"sendTime\":\"2013-02-26T09:31:20.882Z\"\n}\n\n--Boundary_1_14413901_1361871080888\nContent-Type: text/plain\n\nHello, World!\n\n--Boundary_1_14413901_1361871080888--",
        "type": "string"
    }
];

/**
 * Definition of options for sendSMS operation
 */
export var sendSMSOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "createsmsmessage.CreateSMSMessage"
    }
];

/**
 * Definition of options for listMessages operation
 */
export var listMessagesOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "availability",
        "type": "IListMessagesAvailability",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Alive",
            "Deleted",
            "Purged"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "conversationId",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "direction",
        "type": "IListMessagesDirection",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Inbound",
            "Outbound"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "distinctConversations",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "messageType",
        "type": "IListMessagesMessageType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Fax",
            "SMS",
            "VoiceMail",
            "Pager",
            "Text"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "readStatus",
        "type": "IListMessagesReadStatus",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Read",
            "Unread"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "phoneNumber",
        "type": "string",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadMessage operation
 */
export var loadMessageOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "messageId",
        "type": "number",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for updateMessage operation
 */
export var updateMessageOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "messageId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "updatemessagerequest.UpdateMessageRequest"
    }
];

/**
 * Definition of options for deleteMessage operation
 */
export var deleteMessageOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "messageId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "purge",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "conversationId",
        "type": "number",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadMessageAttachment operation
 */
export var loadMessageAttachmentOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "attachmentId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "messageId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for syncMessages operation
 */
export var syncMessagesOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "conversationId",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "direction",
        "type": "ISyncMessagesDirection",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Inbound",
            "Outbound"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "distinctConversations",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "messageType",
        "type": "ISyncMessagesMessageType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Fax",
            "SMS",
            "VoiceMail",
            "Pager",
            "Text"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "recordCount",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "syncToken",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "syncType",
        "type": "ISyncMessagesSyncType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "FSync",
            "ISync"
        ],
        "in": "query",
        "required": false
    }
];

export enum IListMessagesAvailability {
    Alive = <any>'Alive',
    Deleted = <any>'Deleted',
    Purged = <any>'Purged'
}

export enum IListMessagesDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListMessagesMessageType {
    Fax = <any>'Fax',
    SMS = <any>'SMS',
    VoiceMail = <any>'VoiceMail',
    Pager = <any>'Pager',
    Text = <any>'Text'
}

export enum IListMessagesReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}

export enum ISyncMessagesDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum ISyncMessagesMessageType {
    Fax = <any>'Fax',
    SMS = <any>'SMS',
    VoiceMail = <any>'VoiceMail',
    Pager = <any>'Pager',
    Text = <any>'Text'
}

export enum ISyncMessagesSyncType {
    FSync = <any>'FSync',
    ISync = <any>'ISync'
}