/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import lookupphonenumberinfo = require('./LookupPhoneNumberInfo');

export class PhoneNumbers extends model.Model {

    /**
     * Canonical URI of the phone numbers resource
     */
    uri:string;

    /**
     * List of phone numbers filtered by the specified criteria
     */
    records:lookupphonenumberinfo.LookupPhoneNumberInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'records', Class: lookupphonenumberinfo.LookupPhoneNumberInfo, isArray: true,isRequired: true}
        ];

    }

    getClassName() {
        return 'PhoneNumbers';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}