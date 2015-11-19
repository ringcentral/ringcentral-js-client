/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import permissioninfo = require('./PermissionInfo');

export class ExtensionPermissions extends model.Model {

    /**
     * Admin permission
     */
    admin:permissioninfo.PermissionInfo;

    /**
     * International Calling permission
     */
    internationalCalling:permissioninfo.PermissionInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'admin', Class: permissioninfo.PermissionInfo, isArray: false,isRequired: false},
            {property: 'internationalCalling', Class: permissioninfo.PermissionInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ExtensionPermissions';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}