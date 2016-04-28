/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import accountdevices = require('../models/AccountDevices');
import deviceinfo = require('../models/DeviceInfo');
import extensiondevicelist = require('../models/ExtensionDeviceList');

export class Devices extends client.Client {

    /**
     * Get Account Device List by ID
     *
     * <p style='font-style:italic;'>Since 1.0.12 (Release 6.4)</p>
     * <p>Returns all the devices for a particular extension.</p>
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
    listAccountDevices(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
    }):Promise<accountdevices.AccountDevices> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/device', options, listAccountDevicesOptions),
                         accountdevices.AccountDevices);

    }

    /**
     * Get Account Device(s) by ID
     *
     * <p style='font-style:italic;'>Since 1.0.9 (Release 6.1)</p>
     * <p>Returns account device(s) by their ID(s).</p>
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
    loadAccountDevice(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of a device */
        'deviceId':string;
    }):Promise<deviceinfo.DeviceInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/device/{deviceId}', options, loadAccountDeviceOptions),
                         deviceinfo.DeviceInfo);

    }

    /**
     * Get Extension Device List by ID
     *
     * <p style='font-style:italic;'>Since 1.0.12 (Release 6.4)</p>
     * <p>Returns all the devices for extension(s) by extension ID(s). Batch request is supported, see Batch Requests for details.</p>
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
    listExtensionDevices(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<extensiondevicelist.ExtensionDeviceList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/device', options, listExtensionDevicesOptions),
                         extensiondevicelist.ExtensionDeviceList);

    }

}

/**
 * Definition of options for listAccountDevices operation
 */
export var listAccountDevicesOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];

/**
 * Definition of options for loadAccountDevice operation
 */
export var loadAccountDeviceOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "deviceId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for listExtensionDevices operation
 */
export var listExtensionDevicesOptions:client.IOperationParameter[] = [
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