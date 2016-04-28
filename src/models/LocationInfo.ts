/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class LocationInfo extends model.Model {

    /**
     * Canonical URI of a location
     */
    uri:string;

    /**
     * Area code of the location
     */
    areaCode:string;

    /**
     * Official name of the city, belonging to the certain state
     */
    city:string;

    /**
     * Area code of the location (3-digit usually), according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See for details North American Numbering Plan
     */
    npa:string;

    /**
     * Central office code of the location, according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See for details North American Numbering Plan
     */
    nxx:string;

    /**
     * ID and URI of the state this location belongs to, see State Info
     */
    state:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'areaCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'city', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'npa', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'nxx', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'state', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'LocationInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}