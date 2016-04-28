/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import deviceinfo = require('./DeviceInfo');

export class DeviceOrder extends model.Model {

    /**
     * Identifier of a device
     */
    id:string;

    /**
     * Canonical URI of an order resource
     */
    uri:string;

    /**
     * List of the ordered devices
     */
    devices:deviceinfo.DeviceInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'devices', Class: deviceinfo.DeviceInfo, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'DeviceOrder';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}