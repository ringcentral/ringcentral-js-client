/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import countryinfo = require('./CountryInfo');

export class BrandInfo extends model.Model {

    /**
     * Internal identifier of a brand
     */
    id:string;

    /**
     * Brand name, for example  RingCentral UK ,  ClearFax 
     */
    name:string;

    /**
     * Home country information
     */
    homeCountry:countryinfo.CountryInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'homeCountry', Class: countryinfo.CountryInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'BrandInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}