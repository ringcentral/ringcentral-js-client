/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import extensionforwardingnumberlist = require('../models/ExtensionForwardingNumberList');
import forwardingnumberinfo = require('../models/ForwardingNumberInfo');
import createforwardingnumberrequest = require('../models/CreateForwardingNumberRequest');
import updateforwardingnumberrequest = require('../models/UpdateForwardingNumberRequest');

export class ForwardingNumbers extends client.Client {

    /**
     * Get Extension Forwarding Number List
     *
     * <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p>
     * <p>Returns the list of extension phone numbers used for call forwarding and call flip. The returned list contains all the extension phone numbers that are used for call forwarding and call flip.</p>
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
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listExtensionForwardingNumbers(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<extensionforwardingnumberlist.ExtensionForwardingNumberList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number', options, listExtensionForwardingNumbersOptions),
                         extensionforwardingnumberlist.ExtensionForwardingNumberList);

    }

    /**
     * Create Forwarding Number
     *
     * <p style='font-style:italic;'>Since 1.0.12 (Release 6.4)</p>
     * <p>Adds a new forwarding number to the forwarding number list.</p>
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    createExtensionForwardingNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':createforwardingnumberrequest.CreateForwardingNumberRequest;
    }):Promise<forwardingnumberinfo.ForwardingNumberInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number', options, createExtensionForwardingNumberOptions),
                         forwardingnumberinfo.ForwardingNumberInfo);

    }

    /**
     * Update Forwarding Number by ID
     *
     * <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p>
     * <p>Updates an existent forwarding number from the forwarding number list.</p>
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    updateExtensionForwardingNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a forwarding number; returned in response in the id field */
        'forwardingNumberId':string;
        /** JSON body */
        'body':updateforwardingnumberrequest.UpdateForwardingNumberRequest;
    }):Promise<forwardingnumberinfo.ForwardingNumberInfo> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}', options, updateExtensionForwardingNumberOptions),
                         forwardingnumberinfo.ForwardingNumberInfo);

    }

    /**
     * Delete Forwarding Number by ID
     *
     * <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p>
     * <p>Deletes a forwarding number from the forwarding number list by its ID.</p>
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating user extension info (includes extension name, number, email and phone number, assigned phone numbers, devices and other extension settings)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    deleteExtensionForwardingNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a forwarding number */
        'forwardingNumberId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}', options, deleteExtensionForwardingNumberOptions),
                         null);

    }

}

/**
 * Definition of options for listExtensionForwardingNumbers operation
 */
export var listExtensionForwardingNumbersOptions:client.IOperationParameter[] = [
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
 * Definition of options for createExtensionForwardingNumber operation
 */
export var createExtensionForwardingNumberOptions:client.IOperationParameter[] = [
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
        "type": "createforwardingnumberrequest.CreateForwardingNumberRequest"
    }
];

/**
 * Definition of options for updateExtensionForwardingNumber operation
 */
export var updateExtensionForwardingNumberOptions:client.IOperationParameter[] = [
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
        "name": "forwardingNumberId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "updateforwardingnumberrequest.UpdateForwardingNumberRequest"
    }
];

/**
 * Definition of options for deleteExtensionForwardingNumber operation
 */
export var deleteExtensionForwardingNumberOptions:client.IOperationParameter[] = [
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
        "name": "forwardingNumberId",
        "type": "string",
        "in": "path",
        "required": true
    }
];