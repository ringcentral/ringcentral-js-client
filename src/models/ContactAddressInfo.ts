/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ContactAddressInfo extends model.Model {

    /**
     * Country name of extension user company
     */
    country:string;

    /**
     * State/province name of extension user company
     */
    state:string;

    /**
     * City name of extension user company
     */
    city:string;

    /**
     * Street address of extension user company
     */
    street:string;

    /**
     * Zip code of extension user company
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
        return 'ContactAddressInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}