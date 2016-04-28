/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class BusinessAddressInfo extends model.Model {

    /**
     * Name of a country
     */
    country:string;

    /**
     * Name of a state/province
     */
    state:string;

    /**
     * Name of a city
     */
    city:string;

    /**
     * Street address
     */
    street:string;

    /**
     * Zip code
     */
    zip:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'country', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'state', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'city', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'street', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'zip', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'BusinessAddressInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}