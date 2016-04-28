/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class StateCountryInfo extends model.Model {

    /**
     * Internal identifier of a state
     */
    id:string;

    /**
     * Canonical URI of a state
     */
    uri:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'StateCountryInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}