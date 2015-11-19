/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class GetStateInfoResponse extends model.Model {

    /**
     * Internal identifier of a state
     */
    id:string;

    /**
     * Canonical URI of a state
     */
    uri:string;

    /**
     * ID and URI of the country the state is in, as a part of the Country Info
     */
    country:string;

    /**
     * Short code for a state (2-letter usually)
     */
    isoCode:string;

    /**
     * Official name of a state
     */
    name:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'country', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'isoCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetStateInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}