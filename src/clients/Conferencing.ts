/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import conferencinginfo = require('../models/ConferencingInfo');
import updateconferencinginforequest = require('../models/UpdateConferencingInfoRequest');

export class Conferencing extends client.Client {

    /**
     * Get Conferencing Info
     *
     * <p style='font-style:italic;'>Since 1.0.4 (Release 5.13)</p>
     * <p>Returns the information on the Free Conference Calling (FCC) feature for a given extension.</p>
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
    loadConferencingInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of a country. If not specified, the response is returned for the brand country */
        'countryId'?:string;
    }):Promise<conferencinginfo.ConferencingInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing', options, loadConferencingInfoOptions),
                         conferencinginfo.ConferencingInfo);

    }

    /**
     * Update Conferencing Data
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
    updateConferencingInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':updateconferencinginforequest.UpdateConferencingInfoRequest;
    }):Promise<conferencinginfo.ConferencingInfo> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing', options, updateConferencingInfoOptions),
                         conferencinginfo.ConferencingInfo);

    }

}

/**
 * Definition of options for loadConferencingInfo operation
 */
export var loadConferencingInfoOptions:client.IOperationParameter[] = [
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
        "name": "countryId",
        "type": "string",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for updateConferencingInfo operation
 */
export var updateConferencingInfoOptions:client.IOperationParameter[] = [
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
        "type": "updateconferencinginforequest.UpdateConferencingInfoRequest"
    }
];