/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class FavoriteContactInfo extends model.Model {

    /**
     * Ordinal identifier of a favorite contact
     */
    id:string;

    /**
     * Internal identifier of an extension. Returned for company contacts
     */
    extensionId:string;

    /**
     * Internal identifier of a contact. Returned for personal contacts
     */
    contactId:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contactId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'FavoriteContactInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}