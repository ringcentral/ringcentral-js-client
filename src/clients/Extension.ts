/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import getextensionlistresponse = require('../models/GetExtensionListResponse');
import getextensioninforesponse = require('../models/GetExtensionInfoResponse');

export class Extension extends client.Client {

    /**
     * Get Extension List
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p>
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
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    list(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':number;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'. */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
        /** Extension current state. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned, collection: multi */
        'status'?:IListStatus;
    }):Promise<getextensionlistresponse.GetExtensionListResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension', options, listOptions),
                         getextensionlistresponse.GetExtensionListResponse);

    }

    /**
     * Get Extension Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns basic information about a particular extension of an account.</p>
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
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
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
    }):Promise<getextensioninforesponse.GetExtensionInfoResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}', options, loadOptions),
                         getextensioninforesponse.GetExtensionInfoResponse);

    }

}

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
        "name": "status",
        "type": "IListStatus",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Enabled",
            "Disabled",
            "NotActivated",
            "Unassigned"
        ],
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
    }
];

export enum IListStatus {
    Enabled = <any>'Enabled',
    Disabled = <any>'Disabled',
    NotActivated = <any>'NotActivated',
    Unassigned = <any>'Unassigned'
}