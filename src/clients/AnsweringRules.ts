/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import answeringruleslist = require('../models/AnsweringRulesList');
import answeringruleinfo = require('../models/AnsweringRuleInfo');
import createansweringrulerequest = require('../models/CreateAnsweringRuleRequest');
import updateansweringrulerequest = require('../models/UpdateAnsweringRuleRequest');
import userbusinesshours = require('../models/UserBusinessHours');

export class AnsweringRules extends client.Client {

    /**
     * Get Answering Rules List
     *
     * <p style='font-style:italic;'>Since 1.0.15 (Release 7.0)</p>
     * <p>Returns the extension answering rules.</p>
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
    loadAnsweringRulesList(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<answeringruleslist.AnsweringRulesList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule', options, loadAnsweringRulesListOptions),
                         answeringruleslist.AnsweringRulesList);

    }

    /**
     * Create Answering Rule
     *
     * <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p>
     * <p>Creates a custom answering rule for a particular caller ID.</p>
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
    createAnsweringRuleInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** JSON body */
        'body':createansweringrulerequest.CreateAnsweringRuleRequest;
    }):Promise<answeringruleinfo.AnsweringRuleInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule', options, createAnsweringRuleInfoOptions),
                         answeringruleinfo.AnsweringRuleInfo);

    }

    /**
     * Get Answering Rule by ID
     *
     * <p style='font-style:italic;'>Since 1.0.15 (Release 7.0)</p>
     * <p>Returns an answering rule by ID.</p>
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
    loadAnsweringRuleInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule */
        'ruleId':string;
    }):Promise<answeringruleinfo.AnsweringRuleInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}', options, loadAnsweringRuleInfoOptions),
                         answeringruleinfo.AnsweringRuleInfo);

    }

    /**
     * Update Answering Rule by ID
     *
     * <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p>
     * <p>Updates a custom answering rule for a particular caller ID.</p>
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
    updateAnsweringRuleInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of an answering rule */
        'ruleId':string;
        /** JSON body */
        'body':updateansweringrulerequest.UpdateAnsweringRuleRequest;
    }):Promise<answeringruleinfo.AnsweringRuleInfo> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}', options, updateAnsweringRuleInfoOptions),
                         answeringruleinfo.AnsweringRuleInfo);

    }

    /**
     * Delete Answering Rule by ID
     *
     * <p style='font-style:italic;'>Since 1.0.25 (Release 8.1)</p>
     * <p>Deletes a custom answering rule by a particular ID.</p>
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
    deleteAnsweringRuleInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Internal identifier of an answering rule */
        'ruleId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}', options, deleteAnsweringRuleInfoOptions),
                         null);

    }

    /**
     * Get User Business Hours
     *
     * <p style='font-style:italic;'>Since 1.0.15 (Release 7.0)</p>
     * <p>Returns the extension user hours when answering rules are to be applied.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadUserBusinessHours(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<userbusinesshours.UserBusinessHours> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours', options, loadUserBusinessHoursOptions),
                         userbusinesshours.UserBusinessHours);

    }

}

/**
 * Definition of options for loadAnsweringRulesList operation
 */
export var loadAnsweringRulesListOptions:client.IOperationParameter[] = [
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
 * Definition of options for createAnsweringRuleInfo operation
 */
export var createAnsweringRuleInfoOptions:client.IOperationParameter[] = [
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
        "type": "createansweringrulerequest.CreateAnsweringRuleRequest"
    }
];

/**
 * Definition of options for loadAnsweringRuleInfo operation
 */
export var loadAnsweringRuleInfoOptions:client.IOperationParameter[] = [
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
        "name": "ruleId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for updateAnsweringRuleInfo operation
 */
export var updateAnsweringRuleInfoOptions:client.IOperationParameter[] = [
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
        "name": "ruleId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "updateansweringrulerequest.UpdateAnsweringRuleRequest"
    }
];

/**
 * Definition of options for deleteAnsweringRuleInfo operation
 */
export var deleteAnsweringRuleInfoOptions:client.IOperationParameter[] = [
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
        "name": "ruleId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for loadUserBusinessHours operation
 */
export var loadUserBusinessHoursOptions:client.IOperationParameter[] = [
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