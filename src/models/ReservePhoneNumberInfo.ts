/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ReservePhoneNumberInfo extends model.Model {

    /**
     * Phone number in E.164 format without a '+'
     */
    phoneNumber:string;

    /**
     * Domestic format of a phone number
     */
    formattedNumber:string;

    /**
     * The datetime up to which the number is reserved in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. No value means that number is not reserved anymore
     */
    reservedTill:string;

    /**
     * Internal identifier of phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId:string;

    /**
     * Phone number status
     */
    status:ReservePhoneNumberInfoStatus;

    /**
     * The error code in case of reservation/un-reservation failure
     */
    error:ReservePhoneNumberInfoError;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'formattedNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reservedTill', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reservationId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'status', Class: ReservePhoneNumberInfoStatus, isArray: false,isRequired: false},
            {property: 'error', Class: ReservePhoneNumberInfoError, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReservePhoneNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ReservePhoneNumberInfoStatus {
    Enabled = <any>'Enabled',
    Pending = <any>'Pending',
    Disabled = <any>'Disabled'
}

export enum ReservePhoneNumberInfoError {
    NumberIsAlreadyProvisioned = <any>'NumberIsAlreadyProvisioned',
    NumberReserved = <any>'NumberReserved',
    NumberNotAvailable = <any>'NumberNotAvailable'
}