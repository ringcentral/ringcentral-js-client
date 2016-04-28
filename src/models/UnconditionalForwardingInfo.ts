/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class UnconditionalForwardingInfo extends model.Model {

    /**
     * Phone number to which the call is forwarded
     */
    phoneNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UnconditionalForwardingInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}