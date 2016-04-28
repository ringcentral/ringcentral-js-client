/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import ringoutstatus = require('../models/RingOutStatus');
import makeringoutrequest = require('../models/MakeRingOutRequest');

export class RingOut extends client.Client {

    /**
     * Make RingOut Call
     *
     * <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p>
     * <p>Makes a 2-leg RingOut call.</p>
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
     *             <td class='code'>RingOut</td>
     *             <td>Performing two-legged ring-out phone calls</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    makeRingOutCall(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':makeringoutrequest.MakeRingOutRequest;
    }):Promise<ringoutstatus.RingOutStatus> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout', options, makeRingOutCallOptions),
                         ringoutstatus.RingOutStatus);

    }

    /**
     * Get Status of RingOut Call
     *
     * <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p>
     * <p>Returns the status of a 2-leg RingOut call.</p>
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
     *             <td class='code'>RingOut</td>
     *             <td>Performing two-legged ring-out phone calls</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    getRingOutCallStatus(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a RingOut call */
        'ringoutId':string;
    }):Promise<ringoutstatus.RingOutStatus> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, getRingOutCallStatusOptions),
                         ringoutstatus.RingOutStatus);

    }

    /**
     * Cancel RingOut Call
     *
     * <p style='font-style:italic;'></p>
     * <p>Cancels the 2-leg RingOut call.</p>
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
     *             <td class='code'>RingOut</td>
     *             <td>Performing two-legged ring-out phone calls</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Heavy</p>
     */
    cancelRingOutCall(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a RingOut call */
        'ringoutId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, cancelRingOutCallOptions),
                         null);

    }

}

/**
 * Definition of options for makeRingOutCall operation
 */
export var makeRingOutCallOptions:client.IOperationParameter[] = [
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
        "type": "makeringoutrequest.MakeRingOutRequest"
    }
];

/**
 * Definition of options for getRingOutCallStatus operation
 */
export var getRingOutCallStatusOptions:client.IOperationParameter[] = [
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
        "name": "ringoutId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for cancelRingOutCall operation
 */
export var cancelRingOutCallOptions:client.IOperationParameter[] = [
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
        "name": "ringoutId",
        "type": "string",
        "in": "path",
        "required": true
    }
];