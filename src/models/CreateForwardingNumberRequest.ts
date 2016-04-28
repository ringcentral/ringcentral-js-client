/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CreateForwardingNumberRequest extends model.Model {

    /**
     * Forwarding/Call flip phone number
     */
    phoneNumber:string;

    /**
     * Forwarding/Call flip number title
     */
    label:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'label', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CreateForwardingNumberRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}