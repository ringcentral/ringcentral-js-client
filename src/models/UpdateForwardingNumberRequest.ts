/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class UpdateForwardingNumberRequest extends model.Model {

    /**
     * Forwarding/Call flip phone number
     */
    phoneNumber:string;

    /**
     * Forwarding/Call flip number title
     */
    label:string;

    /**
     * Number assigned to the call flip phone number, corresponds to the shortcut dial number
     */
    flipNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'label', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'flipNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UpdateForwardingNumberRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}