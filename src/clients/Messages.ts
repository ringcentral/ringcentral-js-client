/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import getmessageinforesponse = require('../models/GetMessageInfoResponse');
import createpagermessagerequest = require('../models/CreatePagerMessageRequest');
import createsmsmessage = require('../models/CreateSMSMessage');
import getmessagelist = require('../models/GetMessageList');
import updatemessagerequest = require('../models/UpdateMessageRequest');

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
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    createPager(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':createpagermessagerequest.CreatePagerMessageRequest;
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager', options, createPagerOptions),
                         getmessageinforesponse.GetMessageInfoResponse);

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
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    createFax(options?:{
        /** Internal identifier of a RingCentral account (integer) or tilde (~) to indicate the account which was logged-in within the current session. */
        'accountId':string;
        /** Internal identifier of an extension (integer) or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** This form fills out this required field automatically using the example MIME boundary string. */
        'Content-Type'?:string;
        /** Actual content length. This form fills out this required field automatically. */
        'Content-Length'?:string;
        /** Multi-part MIME consisting of one part JSON body and one part text. For the MIME boundary, in this UI, use "Boundary_1_14413901_1361871080888". JSON body values:<br><br><table style="border:1px #aaa black"><tr><td>Property</td><td>Data type</td><td>Description</td></tr><tr><td><b>to</b></td><td>Contact Info object</td><td>Recipient information. <b>phoneNumber</b> property is mandatory</td></tr><tr><td>resolution</td><td><select><option>High</option><option>Low</option></select></td><td>Fax resolution</td></tr><tr><td>sendTime</td><td>datetime</td><td>Optional. Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately</td></tr><tr><td>coverIndex</td><td>Integer (0-13)<br><select><option>0 (none - no cover page)</option><option>1 ("Ancient" cover page)</option><option>2 ("Birthday" cover page)</option><option>3 ("Blank" cover page)</option><option>4 ("Clasmod" cover page)</option><option>5 ("Classic" cover page)</option><option>6 ("Confidential" cover page)</option><option>7 ("Contempo" cover page)</option><option>8 ("Elegant" cover page)</option><option>9 ("Express" cover page)</option><option>10 ("Formal" cover page)</option><option>11 ("Jazzy" cover page)</option><option>12 ("Modern" cover page)</option><option>13 ("Urgent" cover page)</option></select></td><td>Optional. Cover page index. If not specified, the default cover page which is configured in "Outbound Fax Settings" is attached. See also "Available Cover Pages" table below</td></tr><tr><td>coverPageText</td><td>string</td><td>Optional. Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols</td></tr></table> */
        'body'?:string;
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax', options, createFaxOptions),
                         getmessageinforesponse.GetMessageInfoResponse);

    }

    /**
     * Create SMS Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Creates and sends new SMS message.</p>
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
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    createSms(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':createsmsmessage.CreateSMSMessage;
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms', options, createSmsOptions),
                         getmessageinforesponse.GetMessageInfoResponse);

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
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    list(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Specifies the availability status for the resulting messages. Default value is 'Alive'. Multiple values are accepted, collection: multi */
        'availability'?:IListAvailability;
        /** Specifies the conversation identifier for the resulting messages */
        'conversationId'?:number;
        /** The start timestamp for the resulting messages. Default value is equal to dateTo minus 1 week */
        'dateFrom'?:Date;
        /** Specifies the ending timestamp for the resulting messages. Default: current time */
        'dateTo'?:Date;
        /** The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted, collection: multi */
        'direction'?:IListDirection;
        /** The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted, collection: multi */
        'messageType'?:IListMessageType;
        /** The read status for the resulting messages. Multiple values are accepted, collection: multi */
        'readStatus'?:IListReadStatus;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
        /** The phone number. If specified, messages are returned for this particular phone number only */
        'phoneNumber'?:string;
    }):Promise<getmessagelist.GetMessageList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store', options, listOptions),
                         getmessagelist.GetMessageList);

    }

    /**
     * Get Message Info
     *
     * <p style='font-style:italic;'></p>
     * <p></p>
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
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    load(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message */
        'messageId':number;
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, loadOptions),
                         getmessageinforesponse.GetMessageInfoResponse);

    }

    /**
     * Update Message
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Updates an individual message or several messages. Batch request is supported. Currently, only the message read status updating is supported.</p>
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
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    update(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message */
        'messageId':number;
        /** JSON body */
        'body':updatemessagerequest.UpdateMessageRequest;
    }):Promise<getmessageinforesponse.GetMessageInfoResponse> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, updateOptions),
                         getmessageinforesponse.GetMessageInfoResponse);

    }

    /**
     * Delete Message
     *
     * <p style='font-style:italic;'></p>
     * <p>Deletes an individual message or several messages by the given message ID(s). Batch request is supported.</p>
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
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    remove(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message */
        'messageId':number;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', options, removeOptions),
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
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    loadContent(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a message attachment */
        'attachmentId':number;
        /** Internal identifier of a message */
        'messageId':number;
    }):Promise<any> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}', options, loadContentOptions),
                         null);

    }

}

/**
 * Definition of options for createPager operation
 */
export var createPagerOptions:client.IOperationParameter[] = [
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
        "type": "createpagermessagerequest.CreatePagerMessageRequest",
        "in": "body",
        "required": true
    }
];

/**
 * Definition of options for createFax operation
 */
export var createFaxOptions:client.IOperationParameter[] = [
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
 * Definition of options for createSms operation
 */
export var createSmsOptions:client.IOperationParameter[] = [
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
        "type": "createsmsmessage.CreateSMSMessage",
        "in": "body",
        "required": true
    }
];

/**
 * Definition of options for list operation
 */
export var listOptions:client.IOperationParameter[] = [
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
        "type": "IListAvailability",
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
        "type": "Date",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "Date",
        "in": "query",
        "required": false
    },
    {
        "name": "direction",
        "type": "IListDirection",
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
        "name": "messageType",
        "type": "IListMessageType",
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
        "type": "IListReadStatus",
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
 * Definition of options for load operation
 */
export var loadOptions:client.IOperationParameter[] = [
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
 * Definition of options for update operation
 */
export var updateOptions:client.IOperationParameter[] = [
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
    },
    {
        "name": "body",
        "type": "updatemessagerequest.UpdateMessageRequest",
        "in": "body",
        "required": true
    }
];

/**
 * Definition of options for remove operation
 */
export var removeOptions:client.IOperationParameter[] = [
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
 * Definition of options for loadContent operation
 */
export var loadContentOptions:client.IOperationParameter[] = [
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
        "type": "number",
        "in": "path",
        "required": true
    },
    {
        "name": "messageId",
        "type": "number",
        "in": "path",
        "required": true
    }
];

export enum IListAvailability {
    Alive = <any>'Alive',
    Deleted = <any>'Deleted',
    Purged = <any>'Purged'
}

export enum IListDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListMessageType {
    Fax = <any>'Fax',
    SMS = <any>'SMS',
    VoiceMail = <any>'VoiceMail',
    Pager = <any>'Pager',
    Text = <any>'Text'
}

export enum IListReadStatus {
    Read = <any>'Read',
    Unread = <any>'Unread'
}