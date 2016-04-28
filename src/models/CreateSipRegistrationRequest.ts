/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import deviceinforequest = require('./DeviceInfoRequest');
import sipinforequest = require('./SipInfoRequest');

export class CreateSipRegistrationRequest extends model.Model {

    /**
     * Device unique description
     */
    device:deviceinforequest.DeviceInfoRequest;

    /**
     * SIP settings for device
     */
    sipInfo:sipinforequest.SipInfoRequest;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'device', Class: deviceinforequest.DeviceInfoRequest, isArray: false,isRequired: true},
            {property: 'sipInfo', Class: sipinforequest.SipInfoRequest, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'CreateSipRegistrationRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}