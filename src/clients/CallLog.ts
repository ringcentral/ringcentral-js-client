/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import accountactivecalls = require('../models/AccountActiveCalls');
import accountcalllog = require('../models/AccountCallLog');
import accountcalllogrecord = require('../models/AccountCallLogRecord');
import extensionactivecalls = require('../models/ExtensionActiveCalls');
import extensioncalllog = require('../models/ExtensionCallLog');
import extensioncalllogrecord = require('../models/ExtensionCallLogRecord');
import calllogsync = require('../models/CallLogSync');
import callrecording = require('../models/CallRecording');

export class CallLog extends client.Client {

    /**
     * Get Account Active Calls
     *
     * <p style='font-style:italic;'>Since 1.0.13 (Release 6.5)</p>
     * <p>Returns records of all calls that are in progress, ordered by start time in descending order.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    listAccountActiveCalls(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi */
        'direction'?:IListAccountActiveCallsDirection;
        /** Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi */
        'type'?:IListAccountActiveCallsType;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
    }):Promise<accountactivecalls.AccountActiveCalls> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/active-calls', options, listAccountActiveCallsOptions),
                         accountactivecalls.AccountActiveCalls);

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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadAccountCallLog(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter */
        'extensionNumber'?:string;
        /** Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter */
        'phoneNumber'?:string;
        /** The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi */
        'direction'?:ILoadAccountCallLogDirection;
        /** Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi */
        'type'?:ILoadAccountCallLogType;
        /** The default value is 'Simple' for both account and extension call log, collection: multi */
        'view'?:ILoadAccountCallLogView;
        /** 'True' if only recorded calls have to be returned */
        'withRecording'?:boolean;
        /** The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours */
        'dateFrom'?:string;
        /** The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time */
        'dateTo'?:string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. The default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
    }):Promise<accountcalllog.AccountCallLog> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/call-log', options, loadAccountCallLogOptions),
                         accountcalllog.AccountCallLog);

    }

    /**
     * Delete Call Log Records by Filter
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
     *             <td class='code'>EditCallLog</td>
     *             <td>Viewing and updating user call logs</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    deleteAccountCallLog(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** The end datetime for records deletion in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time */
        'dateTo'?:string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/call-log', options, deleteAccountCallLogOptions),
                         null);

    }

    /**
     * Get Account Call Log Record(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns individual call log record(s) by ID(s). Batch request is supported, see Batch Requests for details.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadAccountCallLogRecord(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of a call log record */
        'callRecordId':number;
    }):Promise<accountcalllogrecord.AccountCallLogRecord> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/call-log/{callRecordId}', options, loadAccountCallLogRecordOptions),
                         accountcalllogrecord.AccountCallLogRecord);

    }

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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    listExtensionActiveCalls(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi */
        'direction'?:IListExtensionActiveCallsDirection;
        /** Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi */
        'type'?:IListExtensionActiveCallsType;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<extensionactivecalls.ExtensionActiveCalls> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls', options, listExtensionActiveCallsOptions),
                         extensionactivecalls.ExtensionActiveCalls);

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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadExtensionCallLog(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Extension number of a user. If specified, returns call log for a particular extension only. Cannot be specified together with the phoneNumber filter */
        'extensionNumber'?:string;
        /** Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the mentioned phone number. Cannot be specified together with the extensionNumber filter */
        'phoneNumber'?:string;
        /** The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted, collection: multi */
        'direction'?:ILoadExtensionCallLogDirection;
        /** Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted, collection: multi */
        'type'?:ILoadExtensionCallLogType;
        /** The default value is 'Simple' for both account and extension call log, collection: multi */
        'view'?:ILoadExtensionCallLogView;
        /** 'True' if only recorded calls have to be returned */
        'withRecording'?:boolean;
        /** The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time */
        'dateTo'?:string;
        /** The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours */
        'dateFrom'?:string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<extensioncalllog.ExtensionCallLog> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', options, loadExtensionCallLogOptions),
                         extensioncalllog.ExtensionCallLog);

    }

    /**
     * Delete Call Log Records by Filter
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
     *             <td class='code'>EditCallLog</td>
     *             <td>Viewing and updating user call logs</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    deleteExtensionCallLog(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** The end datetime for records deletion in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time */
        'dateTo'?:string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', options, deleteExtensionCallLogOptions),
                         null);

    }

    /**
     * Get Extension Call Log Record(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.3 (Release 5.11)</p>
     * <p>Returns call log record(s) by their ID(s). Batch request is supported, see Batch Requests for details.</p>
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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadExtensionCallLogRecord(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a call log record */
        'callRecordId':string;
    }):Promise<extensioncalllogrecord.ExtensionCallLogRecord> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}', options, loadExtensionCallLogRecordOptions),
                         extensioncalllogrecord.ExtensionCallLogRecord);

    }

    /**
     * Call Log Synchronization
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
     *             <td class='code'>ReadCallLog</td>
     *             <td>Viewing user call logs</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    syncExtensionCallLog(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Type of synchronization. 'FSync' is a default value, collection: multi */
        'syncType'?:ISyncExtensionCallLogSyncType;
        /** Value of syncToken property of last sync request response */
        'syncToken'?:string;
        /** The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment */
        'dateFrom'?:string;
        /** For FSync the parameter is mandatory, it limits the number of records to be returned in response. For ISync it specifies with how many records to extend sync Frame to the past, the maximum number of records is 250 */
        'recordCount'?:number;
        /** Type of calls to be returned. The default value is 'All', collection: multi */
        'statusGroup'?:ISyncExtensionCallLogStatusGroup;
    }):Promise<calllogsync.CallLogSync> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync', options, syncExtensionCallLogOptions),
                         calllogsync.CallLogSync);

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
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadCallRecordingMetadata(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of recording (returned in Call Log) */
        'recordingId':string;
    }):Promise<callrecording.CallRecording> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/recording/{recordingId}', options, loadCallRecordingMetadataOptions),
                         callrecording.CallRecording);

    }

    /**
     * Get Call Recording Data
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
     *             <td class='code'>ReadCallRecording</td>
     *             <td>Downloading call recording content</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    loadCallRecordingContent(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of a call recording, see Recording Info */
        'recordingId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/recording/{recordingId}/content', options, loadCallRecordingContentOptions),
                         null);

    }

}

/**
 * Definition of options for listAccountActiveCalls operation
 */
export var listAccountActiveCallsOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "direction",
        "type": "IListAccountActiveCallsDirection",
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
        "type": "IListAccountActiveCallsType",
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
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadAccountCallLog operation
 */
export var loadAccountCallLogOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
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
        "type": "ILoadAccountCallLogDirection",
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
        "type": "ILoadAccountCallLogType",
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
        "type": "ILoadAccountCallLogView",
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
        "name": "dateFrom",
        "type": "string",
        "format": "date-time",
        "in": "query",
        "required": false
    },
    {
        "name": "dateTo",
        "type": "string",
        "format": "date-time",
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for deleteAccountCallLog operation
 */
export var deleteAccountCallLogOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "dateTo",
        "type": "string",
        "format": "date-time",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadAccountCallLogRecord operation
 */
export var loadAccountCallLogRecordOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
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
 * Definition of options for listExtensionActiveCalls operation
 */
export var listExtensionActiveCallsOptions:client.IOperationParameter[] = [
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
        "type": "IListExtensionActiveCallsDirection",
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
        "type": "IListExtensionActiveCallsType",
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
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadExtensionCallLog operation
 */
export var loadExtensionCallLogOptions:client.IOperationParameter[] = [
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
        "type": "ILoadExtensionCallLogDirection",
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
        "type": "ILoadExtensionCallLogType",
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
        "type": "ILoadExtensionCallLogView",
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
        "type": "string",
        "format": "date-time",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "string",
        "format": "date-time",
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for deleteExtensionCallLog operation
 */
export var deleteExtensionCallLogOptions:client.IOperationParameter[] = [
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
        "name": "dateTo",
        "type": "string",
        "format": "date-time",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadExtensionCallLogRecord operation
 */
export var loadExtensionCallLogRecordOptions:client.IOperationParameter[] = [
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
        "name": "callRecordId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for syncExtensionCallLog operation
 */
export var syncExtensionCallLogOptions:client.IOperationParameter[] = [
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
        "name": "syncType",
        "type": "ISyncExtensionCallLogSyncType",
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
    },
    {
        "name": "syncToken",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "dateFrom",
        "type": "string",
        "format": "date-time",
        "in": "query",
        "required": false
    },
    {
        "name": "recordCount",
        "type": "number",
        "format": "int64",
        "in": "query",
        "required": false
    },
    {
        "name": "statusGroup",
        "type": "ISyncExtensionCallLogStatusGroup",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Missed",
            "All"
        ],
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadCallRecordingMetadata operation
 */
export var loadCallRecordingMetadataOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "recordingId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for loadCallRecordingContent operation
 */
export var loadCallRecordingContentOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "recordingId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

export enum IListAccountActiveCallsDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListAccountActiveCallsType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum ILoadAccountCallLogDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum ILoadAccountCallLogType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum ILoadAccountCallLogView {
    Simple = <any>'Simple',
    Detailed = <any>'Detailed'
}

export enum IListExtensionActiveCallsDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum IListExtensionActiveCallsType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum ILoadExtensionCallLogDirection {
    Inbound = <any>'Inbound',
    Outbound = <any>'Outbound'
}

export enum ILoadExtensionCallLogType {
    Voice = <any>'Voice',
    Fax = <any>'Fax'
}

export enum ILoadExtensionCallLogView {
    Simple = <any>'Simple',
    Detailed = <any>'Detailed'
}

export enum ISyncExtensionCallLogSyncType {
    FSync = <any>'FSync',
    ISync = <any>'ISync'
}

export enum ISyncExtensionCallLogStatusGroup {
    Missed = <any>'Missed',
    All = <any>'All'
}