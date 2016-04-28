/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class RangesInfo extends model.Model {

    /**
     * Date and time in format YYYY-MM-DD hh:mm
     */
    from:string;

    /**
     * Date and time in format YYYY-MM-DD hh:mm
     */
    to:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'to', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'RangesInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}