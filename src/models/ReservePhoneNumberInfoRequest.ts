/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ReservePhoneNumberInfoRequest extends model.Model {

    /**
     * Phone number in E.164 format without a '+'
     */
    phoneNumber:string;

    /**
     * The datetime up to which the number is reserved in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. If it is omitted or explicitly set to 'null', the number will be un-reserved if it was reserved previously by the same session. Also the values 'Min' and 'Max' are supported. 'Min' is 30 seconds; and 'Max' is 30 days (for reservation by brand) and 20 minutes (for reservation by account/session)
     */
    reservedTill:string;

    /**
     * Internal identifier of a phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reservedTill', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'reservationId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReservePhoneNumberInfoRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}