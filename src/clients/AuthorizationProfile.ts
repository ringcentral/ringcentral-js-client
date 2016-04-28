/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import authorizationprofile = require('../models/AuthorizationProfile');
import authorizationprofilecheck = require('../models/AuthorizationProfileCheck');

export class AuthorizationProfile extends client.Client {

    /**
     * Get User Permissions
     *
     * <p style='font-style:italic;'>Since 1.0.22 (Release 7.5)</p>
     * <p>Returns a list of user permissions granted at authorization procedure.</p>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    loadUserPermissions(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<authorizationprofile.AuthorizationProfile> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile', options, loadUserPermissionsOptions),
                         authorizationprofile.AuthorizationProfile);

    }

    /**
     * Check User Permissions
     *
     * <p style='font-style:italic;'>Since 1.0.22 (Release 7.5)</p>
     * <p>Checks if a certain user permission is activated for the particular extension.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadUserPermission(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Permission to check */
        'permissionId'?:string;
        /** Optional. Internal identifier of an extension for which user permissions are to be checked. The default value is the currently logged-in extension */
        'targetExtensionId'?:string;
    }):Promise<authorizationprofilecheck.AuthorizationProfileCheck> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check', options, loadUserPermissionOptions),
                         authorizationprofilecheck.AuthorizationProfileCheck);

    }

}

/**
 * Definition of options for loadUserPermissions operation
 */
export var loadUserPermissionsOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    }
];

/**
 * Definition of options for loadUserPermission operation
 */
export var loadUserPermissionOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "extensionId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "permissionId",
        "type": "string",
        "in": "query",
        "required": false
    },
    {
        "name": "targetExtensionId",
        "type": "string",
        "in": "query",
        "required": false
    }
];