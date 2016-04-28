/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ExtensionInfoCallLog extends model.Model {

    /**
     * Internal identifier of an extension
     */
    id:string;

    /**
     * Canonical URI of an extension
     */
    uri:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ExtensionInfoCallLog';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}