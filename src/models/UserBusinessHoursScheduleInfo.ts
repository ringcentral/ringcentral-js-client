/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import weeklyscheduleinfo = require('./WeeklyScheduleInfo');

export class UserBusinessHoursScheduleInfo extends model.Model {

    /**
     * Weekly schedule
     */
    weeklyRanges:weeklyscheduleinfo.WeeklyScheduleInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'weeklyRanges', Class: weeklyscheduleinfo.WeeklyScheduleInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UserBusinessHoursScheduleInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}