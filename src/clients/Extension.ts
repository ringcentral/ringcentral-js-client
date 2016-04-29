/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import extensionlist = require('../models/ExtensionList');
import extensioninfo = require('../models/ExtensionInfo');
import extensionphonenumbers = require('../models/ExtensionPhoneNumbers');
import extensiongrantlist = require('../models/ExtensionGrantList');
import departmentmembers = require('../models/DepartmentMembers');

export class Extension extends client.Client {

    /**
     * Get Extension List
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns the list of extensions created for a particular account. All types of extensions are included in this list.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    listExtensions(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default. */
        'perPage'?:number;
        /** Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned, collection: multi */
        'status'?:IListExtensionsStatus;
        /** Extension type. Multiple values are supported, collection: multi */
        'type'?:IListExtensionsType;
    }):Promise<extensionlist.ExtensionList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension', options, listExtensionsOptions),
                         extensionlist.ExtensionList);

    }

    /**
     * Get Extension Info
     *
     * <p style='font-style:italic;'>Since 1.0.0</p>
     * <p>Returns basic information about a particular extension of an account.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadExtensionInfo(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<extensioninfo.ExtensionInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}', options, loadExtensionInfoOptions),
                         extensioninfo.ExtensionInfo);

    }

    /**
     * Get Extension Phone Number List
     *
     * <p style='font-style:italic;'>Since 1.0.2</p>
     * <p>Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level numbers
     *     which may be used when performing different operations on behalf of this extension.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listExtensionPhoneNumbers(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Usage type of the phone number, collection: multi */
        'usageType'?:IListExtensionPhoneNumbersUsageType;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<extensionphonenumbers.ExtensionPhoneNumbers> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number', options, listExtensionPhoneNumbersOptions),
                         extensionphonenumbers.ExtensionPhoneNumbers);

    }

    /**
     * Get Extension Grant List
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the list of extension grants.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listExtensionGrants(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<extensiongrantlist.ExtensionGrantList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant', options, listExtensionGrantsOptions),
                         extensiongrantlist.ExtensionGrantList);

    }

    /**
     * Get Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the extension profile image.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    loadExtensionProfileImage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image', options, loadExtensionProfileImageOptions),
                         null);

    }

    /**
     * Create Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the extension profile image.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>High</p>
     */
    createExtensionProfileImage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image', options, createExtensionProfileImageOptions),
                         null);

    }

    /**
     * Update Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Updates the extension profile image.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>EditExtensions</td>
     *             <td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>High</p>
     */
    updateExtensionProfileImage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image', options, updateExtensionProfileImageOptions),
                         null);

    }

    /**
     * Get Extension Profile Image
     *
     * <p style='font-style:italic;'></p>
     * <p>Returns the scaled profile image of an extension.</p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    loadExtensionScaledProfileImage(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session */
        'extensionId':string;
        /** Optional. Dimensions of a profile image which will be returned in response. The possible values are '90x90'/ '195x195' / '584x584' */
        'scaleSize':string;
    }):Promise<any> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}', options, loadExtensionScaledProfileImageOptions),
                         null);

    }

    /**
     * Get Department Member List
     *
     * <p style='font-style:italic;'></p>
     * <p></p>
     * <h4>Required Permissions</h4>
     * <table class='fullwidth'>
     *     <thead>
     *         <tr>
     *             <th>Permission</th>
     *             <th>Description</th>
     *         </tr>
     *     </thead>
     *     <tbody>
     *         <tr>
     *             <td class='code'>ReadAccounts</td>
     *             <td>Viewing user account info (including name, business name, address and phone number/account number)</td>
     *         </tr>
     *     </tbody>
     * </table>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    listDepartmentMembers(options?:{
        /** Internal identifier of a RingCentral account or tilde (~) to indicate the account logged-in within the current session */
        'accountId':string;
        /** Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid) */
        'departmentId':string;
        /** Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1' */
        'page'?:number;
        /** Indicates the page size (number of items). If not specified, the value is '100' by default */
        'perPage'?:number;
    }):Promise<departmentmembers.DepartmentMembers> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/account/{accountId}/department/{departmentId}/members', options, listDepartmentMembersOptions),
                         departmentmembers.DepartmentMembers);

    }

}

/**
 * Definition of options for listExtensions operation
 */
export var listExtensionsOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "status",
        "type": "IListExtensionsStatus",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "Enabled",
            "Disabled",
            "NotActivated",
            "Unassigned"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "type",
        "type": "IListExtensionsType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "User",
            "FaxUser",
            "VirtualUser",
            "DigitalUser",
            "Department",
            "Announcement",
            "Voicemail",
            "SharedLinesGroup",
            "PagingOnlyGroup",
            "IvrMenu",
            "ApplicationExtension",
            "ParkLocation"
        ],
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadExtensionInfo operation
 */
export var loadExtensionInfoOptions:client.IOperationParameter[] = [
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
 * Definition of options for listExtensionPhoneNumbers operation
 */
export var listExtensionPhoneNumbersOptions:client.IOperationParameter[] = [
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
        "name": "usageType",
        "type": "IListExtensionPhoneNumbersUsageType",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "allowEmptyValue": true,
        "enum": [
            "MainCompanyNumber",
            "AdditionalCompanyNumber",
            "CompanyNumber",
            "DirectNumber",
            "CompanyFaxNumber",
            "ForwardedNumber"
        ],
        "in": "query",
        "required": false
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for listExtensionGrants operation
 */
export var listExtensionGrantsOptions:client.IOperationParameter[] = [
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
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];

/**
 * Definition of options for loadExtensionProfileImage operation
 */
export var loadExtensionProfileImageOptions:client.IOperationParameter[] = [
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
 * Definition of options for createExtensionProfileImage operation
 */
export var createExtensionProfileImageOptions:client.IOperationParameter[] = [
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
 * Definition of options for updateExtensionProfileImage operation
 */
export var updateExtensionProfileImageOptions:client.IOperationParameter[] = [
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
 * Definition of options for loadExtensionScaledProfileImage operation
 */
export var loadExtensionScaledProfileImageOptions:client.IOperationParameter[] = [
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
        "name": "scaleSize",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for listDepartmentMembers operation
 */
export var listDepartmentMembersOptions:client.IOperationParameter[] = [
    {
        "name": "accountId",
        "type": "string",
        "in": "path",
        "required": true,
        "default": "~"
    },
    {
        "name": "departmentId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "page",
        "type": "number",
        "in": "query",
        "required": false
    },
    {
        "name": "perPage",
        "type": "number",
        "in": "query",
        "required": false
    }
];

export enum IListExtensionsStatus {
    Enabled = <any>'Enabled',
    Disabled = <any>'Disabled',
    NotActivated = <any>'NotActivated',
    Unassigned = <any>'Unassigned'
}

export enum IListExtensionsType {
    User = <any>'User',
    FaxUser = <any>'FaxUser',
    VirtualUser = <any>'VirtualUser',
    DigitalUser = <any>'DigitalUser',
    Department = <any>'Department',
    Announcement = <any>'Announcement',
    Voicemail = <any>'Voicemail',
    SharedLinesGroup = <any>'SharedLinesGroup',
    PagingOnlyGroup = <any>'PagingOnlyGroup',
    IvrMenu = <any>'IvrMenu',
    ApplicationExtension = <any>'ApplicationExtension',
    ParkLocation = <any>'ParkLocation'
}

export enum IListExtensionPhoneNumbersUsageType {
    MainCompanyNumber = <any>'MainCompanyNumber',
    AdditionalCompanyNumber = <any>'AdditionalCompanyNumber',
    CompanyNumber = <any>'CompanyNumber',
    DirectNumber = <any>'DirectNumber',
    CompanyFaxNumber = <any>'CompanyFaxNumber',
    ForwardedNumber = <any>'ForwardedNumber'
}