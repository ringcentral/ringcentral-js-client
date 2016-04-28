/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MakeRingOutCallerInfoRequestTo extends model.Model {

    /**
     * Phone number in E.164 format
     */
    phoneNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MakeRingOutCallerInfoRequestTo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}