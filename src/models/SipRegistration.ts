/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import sipdeviceinfo = require('./SipDeviceInfo');
import sipinforequest = require('./SipInfoRequest');

export class SipRegistration extends model.Model {

    /**
     * Device unique description
     */
    device:sipdeviceinfo.SipDeviceInfo;

    /**
     * SIP settings for device
     */
    sipInfo:sipinforequest.SipInfoRequest;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'device', Class: sipdeviceinfo.SipDeviceInfo, isArray: false,isRequired: true},
            {property: 'sipInfo', Class: sipinforequest.SipInfoRequest, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'SipRegistration';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}