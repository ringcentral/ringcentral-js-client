/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class TimeInterval extends model.Model {

    /**
     * Time in format hh:mm
     */
    from:string;

    /**
     * Time in format hh:mm
     */
    to:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'to', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'TimeInterval';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}