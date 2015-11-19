/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class DepartmentInfo extends model.Model {

    /**
     * Internal identifier of a department extension
     */
    id:string;

    /**
     * Canonical URI of a department extension
     */
    uri:string;

    /**
     * Number of a department extension
     */
    extensionNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DepartmentInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}