/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import presenceextensioninfo = require('./PresenceExtensionInfo');

export class PresenceInfo extends model.Model {

    /**
     * Canonical URI of a presence info resource
     */
    uri:string;

    /**
     * If 'True' enables other extensions to see the extension presence status
     */
    allowSeeMyPresence:boolean;

    /**
     * Extended DnD (Do not Disturb) status. Cannot be set for Department/Announcement/Voicemail (Take Messages Only)/Fax User/Shared Lines Group/Paging Only Group/IVR Menu/Application Extension/Park Location extensions. The 'DoNotAcceptDepartmentCalls' and 'TakeDepartmentCallsOnly' values are applicable only for extensions - members of a Department; if these values are set for department outsiders, the 400 Bad Request error code is returned. The 'TakeDepartmentCallsOnly' status can be set through the old RingCentral user interface and is available for some migrated accounts only.
     */
    dndStatus:PresenceInfoDndStatus;

    /**
     * Information on extension, for which this presence data is returned
     */
    extension:presenceextensioninfo.PresenceExtensionInfo;

    /**
     * Custom status message (as previously published by user)
     */
    message:string;

    /**
     * If 'True' enables the extension user to pick up a monitored line on hold
     */
    pickUpCallsOnHold:boolean;

    /**
     * Aggregated presence status, calculated from a number of sources
     */
    presenceStatus:PresenceInfoPresenceStatus;

    /**
     * If 'True' enables to ring extension phone, if any user monitored by this extension is ringing
     */
    ringOnMonitoredCall:boolean;

    /**
     * Telephony presence status
     */
    telephonyStatus:PresenceInfoTelephonyStatus;

    /**
     * User-defined presence status (as previously published by the user)
     */
    userStatus:PresenceInfoUserStatus;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'allowSeeMyPresence', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'dndStatus', Class: PresenceInfoDndStatus, isArray: false,isRequired: false},
            {property: 'extension', Class: presenceextensioninfo.PresenceExtensionInfo, isArray: false,isRequired: false},
            {property: 'message', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'pickUpCallsOnHold', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'presenceStatus', Class: PresenceInfoPresenceStatus, isArray: false,isRequired: false},
            {property: 'ringOnMonitoredCall', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'telephonyStatus', Class: PresenceInfoTelephonyStatus, isArray: false,isRequired: false},
            {property: 'userStatus', Class: PresenceInfoUserStatus, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'PresenceInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum PresenceInfoDndStatus {
    TakeAllCalls = <any>'TakeAllCalls',
    DoNotAcceptAnyCalls = <any>'DoNotAcceptAnyCalls',
    DoNotAcceptDepartmentCalls = <any>'DoNotAcceptDepartmentCalls',
    TakeDepartmentCallsOnly = <any>'TakeDepartmentCallsOnly'
}

export enum PresenceInfoPresenceStatus {
    Offline = <any>'Offline',
    Busy = <any>'Busy',
    Available = <any>'Available'
}

export enum PresenceInfoTelephonyStatus {
    NoCall = <any>'NoCall',
    CallConnected = <any>'CallConnected',
    Ringing = <any>'Ringing',
    OnHold = <any>'OnHold',
    ParkedCall = <any>'ParkedCall'
}

export enum PresenceInfoUserStatus {
    Offline = <any>'Offline',
    Busy = <any>'Busy',
    Available = <any>'Available'
}