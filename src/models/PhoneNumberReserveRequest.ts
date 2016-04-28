/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import reservephonenumberinforequest = require('./ReservePhoneNumberInfoRequest');

export class PhoneNumberReserveRequest extends model.Model {

    /**
     * Phone numbers to be reserved/un-reserved
     */
    records:reservephonenumberinforequest.ReservePhoneNumberInfoRequest[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: reservephonenumberinforequest.ReservePhoneNumberInfoRequest, isArray: true,isRequired: true}
        ];

    }

    getClassName() {
        return 'PhoneNumberReserveRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}