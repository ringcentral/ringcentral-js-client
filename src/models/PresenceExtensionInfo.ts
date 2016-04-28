/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class PresenceExtensionInfo extends model.Model {

    /**
     * Internal identifier of an extension
     */
    id:string;

    /**
     * Canonical URI of an extension
     */
    uri:string;

    /**
     * Extension number (usually 3 or 4 digits)
     */
    extensionNumber:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PresenceExtensionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}