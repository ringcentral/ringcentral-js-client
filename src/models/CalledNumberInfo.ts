/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CalledNumberInfo extends model.Model {

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
        return 'CalledNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}