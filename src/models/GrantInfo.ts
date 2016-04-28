/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import extensioninfogrants = require('./ExtensionInfoGrants');

export class GrantInfo extends model.Model {

    /**
     * Canonical URI of a grant
     */
    uri:string;

    /**
     * Extension information
     */
    extension:extensioninfogrants.ExtensionInfoGrants;

    /**
     * Specifies if picking up of other extensions' calls is allowed for the extension. If 'Presence' feature is disabled for the given extension, the flag is not returned
     */
    callPickup:boolean;

    /**
     * Specifies if monitoring of other extensions' calls is allowed for the extension. If 'CallMonitoring' feature is disabled for the given extension, the flag is not returned
     */
    callMonitoring:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extension', Class: extensioninfogrants.ExtensionInfoGrants, isArray: false,isRequired: false},
            {property: 'callPickup', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'callMonitoring', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GrantInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}