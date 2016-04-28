/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class BlockedNumberInfo extends model.Model {

    /**
     * Canonical URI of a blocked number
     */
    uri:string;

    /**
     * Internal identifier of a blocked number
     */
    id:string;

    /**
     * Name assigned by a user to a blocked phone number
     */
    name:string;

    /**
     * Phone number to be blocked
     */
    phoneNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'BlockedNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}