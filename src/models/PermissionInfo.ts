/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class PermissionInfo extends model.Model {

    /**
     * Specifies if a permission is enabled or not
     */
    enabled:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PermissionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}