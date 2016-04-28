/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import userpermissioninfo = require('./UserPermissionInfo');

export class UserPermissions extends model.Model {

    /**
     * Information on a permission granted
     */
    permission:userpermissioninfo.UserPermissionInfo;

    /**
     * List of active scopes for permission
     */
    scopes:string[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'permission', Class: userpermissioninfo.UserPermissionInfo, isArray: false,isRequired: false},
            {property: 'scopes', Class: null /* string[] */, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'UserPermissions';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}