/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import permissiondetailsinfo = require('./PermissionDetailsInfo');

export class AuthorizationProfileCheck extends model.Model {

    /**
     * Canonical URI of a permission resource
     */
    uri:string;

    /**
     * Specifies if check result is successful or not
     */
    successful:boolean;

    /**
     * Information on a permission checked. Returned if successful is 'True'
     */
    details:permissiondetailsinfo.PermissionDetailsInfo;

    /**
     * List of active scopes for permission. Returned if successful is 'True'
     */
    scopes:string[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'successful', Class: null /* boolean */, isArray: false,isRequired: true},
            {property: 'details', Class: permissiondetailsinfo.PermissionDetailsInfo, isArray: false,isRequired: false},
            {property: 'scopes', Class: null /* string[] */, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'AuthorizationProfileCheck';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}