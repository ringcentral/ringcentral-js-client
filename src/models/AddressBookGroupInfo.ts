/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class AddressBookGroupInfo extends model.Model {

    /**
     * Internal identifier of a group
     */
    id:string;

    /**
     * Canonical URI of a group
     */
    uri:string;

    /**
     * Amount of contacts in a group
     */
    contactsCount:number;

    /**
     * Name of a group
     */
    groupName:string;

    /**
     * Notes for a group
     */
    notes:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contactsCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'groupName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'notes', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AddressBookGroupInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}