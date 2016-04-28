/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CallersInfoRequest extends model.Model {

    /**
     * Phone number of a caller
     */
    callerId:string;

    /**
     * Contact name of a caller
     */
    name:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'callerId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CallersInfoRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}