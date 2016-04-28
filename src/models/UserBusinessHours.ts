/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import userbusinesshoursscheduleinfo = require('./UserBusinessHoursScheduleInfo');

export class UserBusinessHours extends model.Model {

    /**
     * Canonical URI of a business-hours resource
     */
    uri:string;

    /**
     * Schedule when an answering rule is applied
     */
    schedule:userbusinesshoursscheduleinfo.UserBusinessHoursScheduleInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'schedule', Class: userbusinesshoursscheduleinfo.UserBusinessHoursScheduleInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UserBusinessHours';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}