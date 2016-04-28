/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import makeringoutcallerinforequestfrom = require('./MakeRingOutCallerInfoRequestFrom');
import makeringoutcallerinforequestto = require('./MakeRingOutCallerInfoRequestTo');
import makeringoutcoutryinfo = require('./MakeRingOutCoutryInfo');

export class MakeRingOutRequest extends model.Model {

    /**
     * Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number
     */
    from:makeringoutcallerinforequestfrom.MakeRingOutCallerInfoRequestFrom;

    /**
     * Phone number of the called party. This number corresponds to the 2nd leg of the RingOut call
     */
    to:makeringoutcallerinforequestto.MakeRingOutCallerInfoRequestTo;

    /**
     * The number which will be displayed to the called party
     */
    callerId:makeringoutcallerinforequestto.MakeRingOutCallerInfoRequestTo;

    /**
     * The audio prompt that the calling party hears when the call is connected
     */
    playPrompt:boolean;

    /**
     * Optional. Dialing plan country data. If not specified, then extension home country is applied by default
     */
    country:makeringoutcoutryinfo.MakeRingOutCoutryInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'from', Class: makeringoutcallerinforequestfrom.MakeRingOutCallerInfoRequestFrom, isArray: false,isRequired: true},
            {property: 'to', Class: makeringoutcallerinforequestto.MakeRingOutCallerInfoRequestTo, isArray: false,isRequired: true},
            {property: 'callerId', Class: makeringoutcallerinforequestto.MakeRingOutCallerInfoRequestTo, isArray: false,isRequired: false},
            {property: 'playPrompt', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'country', Class: makeringoutcoutryinfo.MakeRingOutCoutryInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MakeRingOutRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}