/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CalledNumberInfoRequest extends model.Model {

    /**
     * Called phone number
     */
    phoneNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CalledNumberInfoRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}