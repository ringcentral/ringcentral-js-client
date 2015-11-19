/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import getringoutstatusresponse = require('../models/GetRingOutStatusResponse');
import makeringoutrequest = require('../models/MakeRingOutRequest');

export class RingOut extends client.Client {

    /**
     * Make RingOut Call
     *
     * <p style='font-style:italic;'>Since 1.0.7 (Release 5.16)</p>
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
     *             <td class='code'>RingOut</td>
     *             <td>Performing two-legged ring-out phone calls</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    create(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':makeringoutrequest.MakeRingOutRequest;
    }):Promise<getringoutstatusresponse.GetRingOutStatusResponse> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout', options, createOptions),
                         getringoutstatusresponse.GetRingOutStatusResponse);

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
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    load(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a RingOut call */
        'ringoutId':string;
    }):Promise<getringoutstatusresponse.GetRingOutStatusResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, loadOptions),
                         getringoutstatusresponse.GetRingOutStatusResponse);

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
     *         <tr>
     *             <td class='code'>accountId</td>
     *             <td>string</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>extensionId</td>
     *             <td>string</td>
     *         </tr>
     *         <tr>
     *             <td class='code'>ringoutId</td>
     *             <td>string</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>Usage Plan Group</h4>
     * <p>Heavy</p>
     */
    remove(options?:{
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}', options, removeOptions),
                         null);

    }

}

/**
 * Definition of options for create operation
 */
export var createOptions:client.IOperationParameter[] = [
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
        "type": "makeringoutrequest.MakeRingOutRequest",
        "in": "body",
        "required": true
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
        "name": "ringoutId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for remove operation
 */
export var removeOptions:client.IOperationParameter[] = [];