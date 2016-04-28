/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import userpermissions = require('./UserPermissions');

export class AuthorizationProfile extends model.Model {

    /**
     * Canonical URI of an authorization profile resource
     */
    uri:string;

    /**
     * List of user permissions granted
     */
    permissions:userpermissions.UserPermissions[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'permissions', Class: userpermissions.UserPermissions, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'AuthorizationProfile';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}