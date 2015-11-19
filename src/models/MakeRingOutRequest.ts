/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import makeringoutcallerinforequest = require('./MakeRingOutCallerInfoRequest');

export class MakeRingOutRequest extends model.Model {

    /**
     * Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number.
     */
    from:makeringoutcallerinforequest.MakeRingOutCallerInfoRequest;

    /**
     * Phone number of the called party. This number corresponds to the 2nd leg of the RingOut call.
     */
    to:makeringoutcallerinforequest.MakeRingOutCallerInfoRequest;

    /**
     * The number which will be displayed to the called party.
     */
    callerId:makeringoutcallerinforequest.MakeRingOutCallerInfoRequest;

    /**
     * The audio prompt that the calling party hears when the call is connected.
     */
    playPrompt:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: makeringoutcallerinforequest.MakeRingOutCallerInfoRequest, isArray: false,isRequired: true},
            {property: 'to', Class: makeringoutcallerinforequest.MakeRingOutCallerInfoRequest, isArray: false,isRequired: true},
            {property: 'callerId', Class: makeringoutcallerinforequest.MakeRingOutCallerInfoRequest, isArray: false,isRequired: false},
            {property: 'playPrompt', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MakeRingOutRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}