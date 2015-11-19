/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CountryInfo extends model.Model {

    /**
     * Internal identifier of a home country
     */
    id:string;

    /**
     * Home country URI
     */
    uri:string;

    /**
     * Home country calling code defined by ITU-T recommendations E.123 and E.164, see Calling Codes
     */
    callingCode:string;

    /**
     * Home country code according to the ISO standard, see ISO 3166
     */
    isoCode:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'callingCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'isoCode', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CountryInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}