/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MakeRingOutCallerInfoRequestFrom extends model.Model {

    /**
     * Phone number in E.164 format
     */
    phoneNumber:string;

    /**
     * Internal identifier of a forwarding number; returned in response in the id field. Can be specified instead of the phoneNumber attribute
     */
    forwardingNumberId:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'forwardingNumberId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MakeRingOutCallerInfoRequestFrom';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}