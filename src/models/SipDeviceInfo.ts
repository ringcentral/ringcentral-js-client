/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import deviceextensioninfo = require('./DeviceExtensionInfo');
import phonelinesinfo = require('./PhoneLinesInfo');

export class SipDeviceInfo extends model.Model {

    /**
     * Canonical URI of a device
     */
    uri:string;

    /**
     * Internal identifier of a device
     */
    id:string;

    /**
     * Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
     */
    sku:string;

    /**
     * Device type. The default value is 'HardPhone'
     */
    type:SipDeviceInfoType;

    /**
     * Device name. Mandatory if ordering  SoftPhone  or  OtherPhone . Optional for  HardPhone . If not specified for HardPhone, then device  model  name is used as device  name 
     */
    name:string;

    /**
     * Serial number for HardPhone (is returned only when the phone is shipped and provisioned); endpoint_id for softphone and mobile applications
     */
    serial:string;

    /**
     * PC name for softphone
     */
    computerName:string;

    /**
     * This attribute can be omitted for unassigned devices
     */
    extension:deviceextensioninfo.DeviceExtensionInfo;

    /**
     * Phone lines information
     */
    phoneLines:phonelinesinfo.PhoneLinesInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'sku', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: SipDeviceInfoType, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serial', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'computerName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extension', Class: deviceextensioninfo.DeviceExtensionInfo, isArray: false,isRequired: false},
            {property: 'phoneLines', Class: phonelinesinfo.PhoneLinesInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'SipDeviceInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum SipDeviceInfoType {
    SoftPhone = <any>'SoftPhone',
    OtherPhone = <any>'OtherPhone',
    HardPhone = <any>'HardPhone'
}