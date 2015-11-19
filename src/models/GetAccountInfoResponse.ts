/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import getextensioninforesponse = require('./GetExtensionInfoResponse');
import serviceinforesponse = require('./ServiceInfoResponse');
import accountstatusinfo = require('./AccountStatusInfo');

export class GetAccountInfoResponse extends model.Model {

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
    operator:getextensioninforesponse.GetExtensionInfoResponse;

    /**
     * Additional account identifier, developed and applied by the client
     */
    partnerId:string;

    /**
     * Account service information, including brand, service plan and billing plan
     */
    serviceInfo:serviceinforesponse.ServiceInfoResponse;

    /**
     * Specifies account configuration wizard state (web service setup). The default value is 'NotStarted'
     */
    setupWizardState:GetAccountInfoResponseSetupWizardState;

    /**
     * Status of the current account
     */
    status:GetAccountInfoResponseStatus;

    /**
     * Status information (reason, comment, lifetime). Returned for 'Disabled' status only
     */
    statusInfo:accountstatusinfo.AccountStatusInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'mainNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'operator', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceInfo', Class: serviceinforesponse.ServiceInfoResponse, isArray: false,isRequired: false},
            {property: 'setupWizardState', Class: GetAccountInfoResponseSetupWizardState, isArray: false,isRequired: false},
            {property: 'status', Class: GetAccountInfoResponseStatus, isArray: false,isRequired: false},
            {property: 'statusInfo', Class: accountstatusinfo.AccountStatusInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetAccountInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum GetAccountInfoResponseSetupWizardState {
    NotStarted = <any>'NotStarted',
    Incomplete = <any>'Incomplete',
    Completed = <any>'Completed'
}

export enum GetAccountInfoResponseStatus {
    Confirmed = <any>'Confirmed',
    Disabled = <any>'Disabled'
}