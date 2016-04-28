/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class UserPermissionInfo extends model.Model {

    /**
     * Internal identifier of a permission
     */
    id:string;

    /**
     * Canonical URI of a permission resource
     */
    uri:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UserPermissionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}