/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import modelinfo = require('./ModelInfo');
import deviceextensioninfo = require('./DeviceExtensionInfo');
import emergencyaddressinfo = require('./EmergencyAddressInfo');
import phonelinesinfo = require('./PhoneLinesInfo');
import shippinginfo = require('./ShippingInfo');

export class DeviceInfo extends model.Model {

    /**
     * Internal identifier of a device
     */
    id:string;

    /**
     * Canonical URI of a device
     */
    uri:string;

    /**
     * Device identification number (stock keeping unit) in the format TP-ID [-AT-AC], where TP is device type (HP for RC HardPhone, DV for all other devices including softphone); ID - device model ID; AT -addon type ID; AC - addon count (if any). For example 'HP-56-2-2'
     */
    sku:string;

    /**
     * Device type. The default value is 'HardPhone'
     */
    type:DeviceInfoType;

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
     * HardPhone model information
     */
    model:modelinfo.ModelInfo;

    /**
     * This attribute can be omitted for unassigned devices
     */
    extension:deviceextensioninfo.DeviceExtensionInfo;

    /**
     * Address for emergency cases. The same emergency address is assigned to all the numbers of one device
     */
    emergencyServiceAddress:emergencyaddressinfo.EmergencyAddressInfo;

    /**
     * Phone lines information
     */
    phoneLines:phonelinesinfo.PhoneLinesInfo;

    /**
     * Shipping information, according to which devices (in case of  HardPhone ) or e911 stickers (in case of  SoftPhone  and  OtherPhone ) will be delivered to the customer
     */
    shipping:shippinginfo.ShippingInfo;

    /**
     * Box billing identifier of a device. Applicable only for HardPhones. It is an alternative way to identify the device to be ordered. Either  model  structure, or  boxBillingId  must be specified for HardPhone
     */
    boxBillingId:number;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'sku', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: DeviceInfoType, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'serial', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'computerName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'model', Class: modelinfo.ModelInfo, isArray: false,isRequired: false},
            {property: 'extension', Class: deviceextensioninfo.DeviceExtensionInfo, isArray: false,isRequired: false},
            {property: 'emergencyServiceAddress', Class: emergencyaddressinfo.EmergencyAddressInfo, isArray: false,isRequired: false},
            {property: 'phoneLines', Class: phonelinesinfo.PhoneLinesInfo, isArray: false,isRequired: false},
            {property: 'shipping', Class: shippinginfo.ShippingInfo, isArray: false,isRequired: false},
            {property: 'boxBillingId', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DeviceInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum DeviceInfoType {
    SoftPhone = <any>'SoftPhone',
    OtherPhone = <any>'OtherPhone',
    HardPhone = <any>'HardPhone'
}