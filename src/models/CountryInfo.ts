/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CountryInfo extends model.Model {

    /**
     * Internal identifier of a home country
     */
    id:string;

    /**
     * Canonical URI of a home country
     */
    uri:string;

    /**
     * Official name of a home country
     */
    name:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CountryInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}