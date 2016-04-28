/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class AccountLimits extends model.Model {

    /**
     * The maximum number of free softphone digital lines per user extension
     */
    freeSoftPhoneLinesPerExtension:number;

    /**
     * The maximum number of participants in RingCentral Meeting hosted by this account's user
     */
    meetingSize:number;

    /**
     * The maximum number of extensions which can be included in the list of users monitored for Presence
     */
    maxMonitoredExtensionsPerUser:number;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'freeSoftPhoneLinesPerExtension', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'meetingSize', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'maxMonitoredExtensionsPerUser', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AccountLimits';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}