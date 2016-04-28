/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import reportingsettings = require('../models/ReportingSettings');
import setreportingsettingsrequest = require('../models/SetReportingSettingsRequest');

export class Reporting extends client.Client {

    /**
     * Get CFA Reporting Settings
     *
     * <p style='font-style:italic;'>Since 1.0.17 (Release 7.2)</p>
     * <p>Returns user-defined configuration of CFA (Customer Facing Analytics) reports.</p>
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
    loadReportingSettings(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<reportingsettings.ReportingSettings> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/reporting/settings', options, loadReportingSettingsOptions),
                         reportingsettings.ReportingSettings);

    }

    /**
     * Set CFA Reporting Settings
     *
     * <p style='font-style:italic;'></p>
     * <p>Sets user-defined configuration of CFA (Customer Facing Analytics) reports.</p>
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
     * <p>Light</p>
     */
    updateReportingSettings(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':setreportingsettingsrequest.SetReportingSettingsRequest;
    }):Promise<reportingsettings.ReportingSettings> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/reporting/settings', options, updateReportingSettingsOptions),
                         reportingsettings.ReportingSettings);

    }

}

/**
 * Definition of options for loadReportingSettings operation
 */
export var loadReportingSettingsOptions:client.IOperationParameter[] = [
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
 * Definition of options for updateReportingSettings operation
 */
export var updateReportingSettingsOptions:client.IOperationParameter[] = [
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
        "type": "setreportingsettingsrequest.SetReportingSettingsRequest"
    }
];