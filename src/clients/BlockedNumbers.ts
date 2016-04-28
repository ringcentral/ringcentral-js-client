/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import blockednumberinfo = require('../models/BlockedNumberInfo');
import blockednumberslist = require('../models/BlockedNumbersList');

export class BlockedNumbers extends client.Client {

    /**
     * Add Blocked Number
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    blockNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<blockednumberinfo.BlockedNumberInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/blocked-number', options, blockNumberOptions),
                         blockednumberinfo.BlockedNumberInfo);

    }

    /**
     * Get Blocked Number List
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns the list of phone numbers which are specified by the user to block inbound calls and SMS messages.</p>
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
    listBlockedNumbers(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<blockednumberslist.BlockedNumbersList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/blocked-number', options, listBlockedNumbersOptions),
                         blockednumberslist.BlockedNumbersList);

    }

    /**
     * Get Blocked Number(s) by ID
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
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadBlockedNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifiers of a blocked number list entry */
        'blockedNumberId':string;
    }):Promise<blockednumberinfo.BlockedNumberInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/blocked-number/{blockedNumberId}', options, loadBlockedNumberOptions),
                         blockednumberinfo.BlockedNumberInfo);

    }

    /**
     * Update Blocked Number(s) by ID
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    updateBlockedNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a blocked number list entry */
        'blockedNumberId':string;
    }):Promise<blockednumberinfo.BlockedNumberInfo> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/blocked-number/{blockedNumberId}', options, updateBlockedNumberOptions),
                         blockednumberinfo.BlockedNumberInfo);

    }

    /**
     * Delete Blocked Number(s) by ID
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
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    unblockNumber(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifiers of a blocked number list entry */
        'blockedNumberId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/blocked-number/{blockedNumberId}', options, unblockNumberOptions),
                         null);

    }

}

/**
 * Definition of options for blockNumber operation
 */
export var blockNumberOptions:client.IOperationParameter[] = [
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

/**
 * Definition of options for listBlockedNumbers operation
 */
export var listBlockedNumbersOptions:client.IOperationParameter[] = [
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

/**
 * Definition of options for loadBlockedNumber operation
 */
export var loadBlockedNumberOptions:client.IOperationParameter[] = [
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
        "name": "blockedNumberId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for updateBlockedNumber operation
 */
export var updateBlockedNumberOptions:client.IOperationParameter[] = [
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
        "name": "blockedNumberId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for unblockNumber operation
 */
export var unblockNumberOptions:client.IOperationParameter[] = [
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
        "name": "blockedNumberId",
        "type": "string",
        "in": "path",
        "required": true
    }
];