/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class DeviceAddressInfo extends model.Model {

    /**
     * Name of a receiver
     */
    customerName:string;

    /**
     * Street address, line 1 - street address, P.O. box, company name, c/o
     */
    street:string;

    /**
     * Street address, line 2 - apartment, suite, unit, building, floor, etc.
     */
    street2:string;

    /**
     * City name
     */
    city:string;

    /**
     * State/province name
     */
    state:string;

    /**
     * Zip code
     */
    zip:string;

    /**
     * Country name
     */
    country:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'customerName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'street', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'street2', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'city', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'state', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'zip', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'country', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DeviceAddressInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}