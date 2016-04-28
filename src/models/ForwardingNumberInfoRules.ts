/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ForwardingNumberInfoRules extends model.Model {

    /**
     * Link to a forwarding number resource
     */
    uri:string;

    /**
     * Internal identifier of a forwarding number
     */
    id:string;

    /**
     * Phone number to which the call is forwarded
     */
    phoneNumber:string;

    /**
     * Title of a forwarding number
     */
    label:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'label', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ForwardingNumberInfoRules';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}