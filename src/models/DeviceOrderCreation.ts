/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import deviceinfo = require('./DeviceInfo');

export class DeviceOrderCreation extends model.Model {

    /**
     * List of the ordered devices
     */
    devices:deviceinfo.DeviceInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'devices', Class: deviceinfo.DeviceInfo, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'DeviceOrderCreation';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}