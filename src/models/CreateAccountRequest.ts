/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import extensioninfo = require('./ExtensionInfo');
import serviceinfo = require('./ServiceInfo');

export class CreateAccountRequest extends model.Model {

    /**
     * Main account VoIP phone number, either Local or Toll-Free. Cannot be Fax Only. Obtained via lookup/reserve API
     */
    mainNumber:string;

    /**
     * Operator's extension information. This extension will receive all calls and messages intended for the operator
     */
    operator:extensioninfo.ExtensionInfo;

    /**
     * Partner identifier for this account
     */
    partnerId:string;

    /**
     * Promotion code to calculate a discount
     */
    promotionCode:string;

    /**
     * Internal identifier of phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId:string;

    /**
     * Account service information, brand identifier and service plan
     */
    serviceInfo:serviceinfo.ServiceInfo;

    /**
     * The status with which an account is created. The default value is 'Initial'
     */
    status:CreateAccountRequestStatus;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'mainNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'operator', Class: extensioninfo.ExtensionInfo, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'promotionCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reservationId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serviceInfo', Class: serviceinfo.ServiceInfo, isArray: false,isRequired: false},
            {property: 'status', Class: CreateAccountRequestStatus, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CreateAccountRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum CreateAccountRequestStatus {
    Initial = <any>'Initial',
    Unconfirmed = <any>'Unconfirmed',
    Confirmed = <any>'Confirmed'
}