/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class DictionaryCountryInfo extends model.Model {

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
     * Emergency calling feature availability/emergency address requirement indicator
     */
    emergencyCalling:boolean;

    /**
     * Country code according to the ISO standard, see ISO 3166
     */
    isoCode:string;

    /**
     * Official name of a country
     */
    name:string;

    /**
     * Determines whether phone numbers are available for a country
     */
    numberSelling:boolean;

    /**
     * Specifies whether login with the phone numbers of this country is enabled or not
     */
    loginAllowed:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'callingCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'emergencyCalling', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'isoCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'numberSelling', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'loginAllowed', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DictionaryCountryInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}