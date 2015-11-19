/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import contactinfo = require('./ContactInfo');
import departmentinfo = require('./DepartmentInfo');
import extensionpermissions = require('./ExtensionPermissions');
import regionalsettingsinfo = require('./RegionalSettingsInfo');
import extensionservicefeatureinfo = require('./ExtensionServiceFeatureInfo');
import extensionstatusinfo = require('./ExtensionStatusInfo');

export class GetExtensionInfoResponse extends model.Model {

    /**
     * Internal identifier of an extension
     */
    id:string;

    /**
     * Canonical URI of an extension
     */
    uri:string;

    /**
     * Contact detailed information
     */
    contact:contactinfo.ContactInfo;

    /**
     * Information on department extension(s), to which the requested extension belongs. Returned only for user extensions, members of department, requested by single extensionId
     */
    departments:departmentinfo.DepartmentInfo;

    /**
     * Number of department extension
     */
    extensionNumber:string;

    /**
     * Extension user name
     */
    name:string;

    /**
     * For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding accountId/extensionId for each partnerId of a client application. In request URIs partnerIds are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account Ids and extension IDs. In all request and response bodies these values are reflected via  partnerId  attributes of account and extension
     */
    partnerId:string;

    /**
     * Extension permissions, corresponding to the Service Web permissions 'Admin' and 'InternationalCalling'
     */
    permissions:extensionpermissions.ExtensionPermissions;

    /**
     * Extension region data (timezone, home country, language)
     */
    regionalSettings:regionalsettingsinfo.RegionalSettingsInfo;

    /**
     * Extension service features returned in response only when the logged-in user requests his/her own extension info, see also Extension Service Features
     */
    serviceFeatures:extensionservicefeatureinfo.ExtensionServiceFeatureInfo[];

    /**
     * Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted'
     */
    setupWizardState:GetExtensionInfoResponseSetupWizardState;

    /**
     * Extension current state
     */
    status:GetExtensionInfoResponseStatus;

    /**
     * Status information (reason, comment). Returned for 'Disabled' status only
     */
    statusInfo:extensionstatusinfo.ExtensionStatusInfo;

    /**
     * Extension type
     */
    type:GetExtensionInfoResponseType;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'contact', Class: contactinfo.ContactInfo, isArray: false,isRequired: false},
            {property: 'departments', Class: departmentinfo.DepartmentInfo, isArray: false,isRequired: false},
            {property: 'extensionNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'permissions', Class: extensionpermissions.ExtensionPermissions, isArray: false,isRequired: false},
            {property: 'regionalSettings', Class: regionalsettingsinfo.RegionalSettingsInfo, isArray: false,isRequired: false},
            {property: 'serviceFeatures', Class: extensionservicefeatureinfo.ExtensionServiceFeatureInfo, isArray: true,isRequired: false},
            {property: 'setupWizardState', Class: GetExtensionInfoResponseSetupWizardState, isArray: false,isRequired: false},
            {property: 'status', Class: GetExtensionInfoResponseStatus, isArray: false,isRequired: false},
            {property: 'statusInfo', Class: extensionstatusinfo.ExtensionStatusInfo, isArray: false,isRequired: false},
            {property: 'type', Class: GetExtensionInfoResponseType, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetExtensionInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum GetExtensionInfoResponseSetupWizardState {
    NotStarted = <any>'NotStarted',
    Incomplete = <any>'Incomplete',
    Completed = <any>'Completed'
}

export enum GetExtensionInfoResponseStatus {
    Enabled = <any>'Enabled',
    Disabled = <any>'Disabled',
    NotActivated = <any>'NotActivated',
    Unassigned = <any>'Unassigned'
}

export enum GetExtensionInfoResponseType {
    User = <any>'User',
    FaxUser = <any>'Fax User',
    VirtualUser = <any>'VirtualUser',
    DigitalUser = <any>'DigitalUser',
    Department = <any>'Department',
    Announcement = <any>'Announcement',
    Voicemail = <any>'Voicemail',
    SharedLinesGroup = <any>'SharedLinesGroup',
    PagingOnly = <any>'PagingOnly',
    IvrMenu = <any>'IvrMenu',
    ApplicationExtension = <any>'ApplicationExtension'
}