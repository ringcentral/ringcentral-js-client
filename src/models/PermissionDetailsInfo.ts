/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import userpermissioninfo = require('./UserPermissionInfo');

export class PermissionDetailsInfo extends model.Model {

    /**
     * Information on a permission checked
     */
    permission:userpermissioninfo.UserPermissionInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'permission', Class: userpermissioninfo.UserPermissionInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PermissionDetailsInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}