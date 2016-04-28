/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class DeviceExtensionInfo extends model.Model {

    /**
     * Internal identifier of an extension
     */
    id:string;

    /**
     * Canonical URI of an extension
     */
    uri:string;

    /**
     * Extension number
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
        return 'DeviceExtensionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}