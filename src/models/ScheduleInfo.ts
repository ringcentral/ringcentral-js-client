/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import weeklyscheduleinfo = require('./WeeklyScheduleInfo');
import rangesinfo = require('./RangesInfo');

export class ScheduleInfo extends model.Model {

    /**
     * Weekly schedule
     */
    weeklyRanges:weeklyscheduleinfo.WeeklyScheduleInfo;

    /**
     * Specific data ranges
     */
    ranges:rangesinfo.RangesInfo;

    /**
     * The user's schedule specified for business hours or after hours; it can also be set/retrieved calling the corresponding method
     */
    ref:ScheduleInfoRef;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'weeklyRanges', Class: weeklyscheduleinfo.WeeklyScheduleInfo, isArray: false,isRequired: false},
            {property: 'ranges', Class: rangesinfo.RangesInfo, isArray: false,isRequired: false},
            {property: 'ref', Class: ScheduleInfoRef, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ScheduleInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ScheduleInfoRef {
    BusinessHours = <any>'BusinessHours',
    AfterHours = <any>'AfterHours'
}