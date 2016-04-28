/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import extensioninfo = require('./ExtensionInfo');
import serviceinfo = require('./ServiceInfo');
import accountstatusinfo = require('./AccountStatusInfo');

export class AccountInfo extends model.Model {

    /**
     * Internal identifier of an account
     */
    id:string;

    /**
     * Canonical URI of an account
     */
    uri:string;

    /**
     * Main phone number of the current account
     */
    mainNumber:string;

    /**
     * Operator's extension information. This extension will receive all calls and messages intended for the operator
     */
    operator:extensioninfo.ExtensionInfo;

    /**
     * Additional account identifier, developed and applied by the client
     */
    partnerId:string;

    /**
     * Account service information, including brand, service plan and billing plan
     */
    serviceInfo:serviceinfo.ServiceInfo;

    /**
     * Specifies account configuration wizard state (web service setup). The default value is 'NotStarted'
     */
    setupWizardState:AccountInfoSetupWizardState;

    /**
     * Status of the current account
     */
    status:AccountInfoStatus;

    /**
     * Status information (reason, comment, lifetime). Returned for 'Disabled' status only
     */
    statusInfo:accountstatusinfo.AccountStatusInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mainNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'operator', Class: extensioninfo.ExtensionInfo, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceInfo', Class: serviceinfo.ServiceInfo, isArray: false,isRequired: false},
            {property: 'setupWizardState', Class: AccountInfoSetupWizardState, isArray: false,isRequired: false},
            {property: 'status', Class: AccountInfoStatus, isArray: false,isRequired: false},
            {property: 'statusInfo', Class: accountstatusinfo.AccountStatusInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AccountInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum AccountInfoSetupWizardState {
    NotStarted = <any>'NotStarted',
    Incomplete = <any>'Incomplete',
    Completed = <any>'Completed'
}

export enum AccountInfoStatus {
    Confirmed = <any>'Confirmed',
    Disabled = <any>'Disabled'
}