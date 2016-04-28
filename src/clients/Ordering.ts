/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import deviceordercreation = require('../models/DeviceOrderCreation');
import deviceorder = require('../models/DeviceOrder');

export class Ordering extends client.Client {

    /**
     * Create Device Order
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
     *             <td class='code'>EditAccounts</td>
     *             <td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    createDeviceOrder(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
    }):Promise<deviceordercreation.DeviceOrderCreation> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/order', options, createDeviceOrderOptions),
                         deviceordercreation.DeviceOrderCreation);

    }

    /**
     * Get Device Order by ID
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
    loadDeviceOrder(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an order */
        'orderId':string;
    }):Promise<deviceorder.DeviceOrder> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/order/{orderId}', options, loadDeviceOrderOptions),
                         deviceorder.DeviceOrder);

    }

}

/**
 * Definition of options for createDeviceOrder operation
 */
export var createDeviceOrderOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];

/**
 * Definition of options for loadDeviceOrder operation
 */
export var loadDeviceOrderOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "orderId",
        "type": "string",
        "in": "path",
        "required": true
    }
];