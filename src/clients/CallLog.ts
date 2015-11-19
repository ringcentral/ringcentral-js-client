/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import extensionactivecallsresponse = require('../models/ExtensionActiveCallsResponse');
import extensioncalllogresponse = require('../models/ExtensionCallLogResponse');
import getextensioncalllogrecordresponse = require('../models/GetExtensionCallLogRecordResponse');
import getcallrecordingresponse = require('../models/GetCallRecordingResponse');

export class CallLog extends client.Client {

    /**
     * Get Active Calls
     *
     * <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p>
     * <p>Returns records of all extension calls that are in progress, ordered by start time in descending order.</p>
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
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    listActiveCalls(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi */
        'direction'?:IListActiveCallsDirection;
        /** Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi */
        'type'?:IListActiveCallsType;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
    }):Promise<extensionactivecallsresponse.ExtensionActiveCallsResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls', options, listActiveCallsOptions),
                         extensionactivecallsresponse.ExtensionActiveCallsResponse);

    }

    /**
     * Get Call Log Records by Filter
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns call log records filtered by the specified parameters.</p>
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
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    list(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':number;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':number;
        /** Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter */
        'extensionNumber'?:string;
        /** Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter */
        'phoneNumber'?:string;
        /** The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi */
        'direction'?:IListDirection;
        /** Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi */
        'type'?:IListType;
        /** The default value is 'Simple' for both account and extension call log, collection: multi */
        'view'?:IListView;
        /** 'True' if only recorded calls have to be returned */
        'withRecording'?:boolean;
        /** Specifies the ending timestamp for result records. Default: current time */
        'dateTo'?:Date;
        /** The start timestamp for result records. Default value is equal to dateTo minus 1 week */
        'dateFrom'?:Date;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
    }):Promise<extensioncalllogresponse.ExtensionCallLogResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', options, listOptions),
                         extensioncalllogresponse.ExtensionCallLogResponse);

    }

    /**
     * Get Call Log Record
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns individual call log record by callRecordId(s).</p>
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
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    load(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':number;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':number;
        /** Internal identifier of a call log record */
        'callRecordId':number;
    }):Promise<getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}', options, loadOptions),
                         getextensioncalllogrecordresponse.GetExtensionCallLogRecordResponse);

    }

    /**
     * Get Call Recording
     *
     * <p style='font-style:italic;'>Since 1.0.18</p>
     * <p>Returns call recording metadata.</p>
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
     *             <td class='code'>ReadCallRecording</td>
     *             <td>Downloading call recording content</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    loadRecording(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':number;
        /** Internal identifier of recording (returned in Call Log) */
        'recordingId':number;
    }):Promise<getcallrecordingresponse.GetCallRecordingResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/recording/{recordingId}', options, loadRecordingOptions),
                         getcallrecordingresponse.GetCallRecordingResponse);

    }

}

/**
 * Definition of options for listActiveCalls operation
 */
export var listActiveCallsOptions:client.IOperationParameter[] = [
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
        "name": "direction",
        "type": "IListActiveCallsDirection",
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
        "name": "type",
        "type": "IListActiveCallsType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Voice",
            "Fax"
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
    }
];

/**
 * Definition of options for list operation
 */
export var listOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionNumber",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "phoneNumber",
        "type": "string",
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
        "name": "type",
        "type": "IListType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Voice",
            "Fax"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "view",
        "type": "IListView",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Simple",
            "Detailed"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "withRecording",
        "type": "boolean",
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
        "name": "dateFrom",
        "type": "Date",
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
    }
];

/**
 * Definition of options for load operation
 */
export var loadOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "callRecordId",
        "type": "number",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for loadRecording operation
 */
export var loadRecordingOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "number",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "recordingId",
        "type": "number",
        "in": "path",
        "required": true
    }
];

export enum IListActiveCallsDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListActiveCallsType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum IListDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum IListView {
    Simple = <any>'Simple',
    Detailed = <any>'Detailed'
}