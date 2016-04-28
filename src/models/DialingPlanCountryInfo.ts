/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class DialingPlanCountryInfo extends model.Model {

    /**
     * Internal identifier of a country
     */
    id:string;

    /**
     * Canonical URI of a country
     */
    uri:string;

    /**
     * Country calling code defined by ITU-T recommendations E.123 and E.164, see Calling Codes
     */
    callingCode:string;

    /**
     * Country code according to the ISO standard, see ISO 3166
     */
    isoCode:string;

    /**
     * Official name of a country
     */
    name:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'callingCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'isoCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DialingPlanCountryInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}