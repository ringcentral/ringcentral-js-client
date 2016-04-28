/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import statecountryinfo = require('./StateCountryInfo');

export class DictionaryStateInfo extends model.Model {

    /**
     * Internal identifier of a state
     */
    id:string;

    /**
     * Canonical URI of a state
     */
    uri:string;

    /**
     * Information on a country the state belongs to
     */
    country:statecountryinfo.StateCountryInfo;

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
            {property: 'country', Class: statecountryinfo.StateCountryInfo, isArray: false,isRequired: false},
            {property: 'isoCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DictionaryStateInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}