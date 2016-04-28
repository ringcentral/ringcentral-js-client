/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import reservephonenumberinfo = require('./ReservePhoneNumberInfo');

export class PhoneNumberReserve extends model.Model {

    /**
     * The reserved/un-reserved phone numbers
     */
    records:reservephonenumberinfo.ReservePhoneNumberInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: reservephonenumberinfo.ReservePhoneNumberInfo, isArray: true,isRequired: true}
        ];

    }

    getClassName() {
        return 'PhoneNumberReserve';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}