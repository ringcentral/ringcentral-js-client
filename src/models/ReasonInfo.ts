/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ReasonInfo extends model.Model {

    /**
     * Internal code of the option disallowance reason
     */
    id:string;

    /**
     * Text description of the option disallowance reason
     */
    message:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'message', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReasonInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}