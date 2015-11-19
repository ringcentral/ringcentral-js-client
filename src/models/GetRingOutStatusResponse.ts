/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import ringoutstatusinfo = require('./RingOutStatusInfo');

export class GetRingOutStatusResponse extends model.Model {

    /**
     * Internal identifier of a RingOut call
     */
    id:string;

    /**
     * RingOut status information
     */
    status:ringoutstatusinfo.RingOutStatusInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'status', Class: ringoutstatusinfo.RingOutStatusInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetRingOutStatusResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}