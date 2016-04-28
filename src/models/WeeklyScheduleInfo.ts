/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import timeinterval = require('./TimeInterval');

export class WeeklyScheduleInfo extends model.Model {

    /**
     * Time intervals for a particular day
     */
    monday:timeinterval.TimeInterval[];

    /**
     * Time intervals for a particular day
     */
    tuesday:timeinterval.TimeInterval[];

    /**
     * Time intervals for a particular day
     */
    wednesday:timeinterval.TimeInterval[];

    /**
     * Time intervals for a particular day
     */
    thursday:timeinterval.TimeInterval[];

    /**
     * Time intervals for a particular day
     */
    friday:timeinterval.TimeInterval[];

    /**
     * Time intervals for a particular day
     */
    saturday:timeinterval.TimeInterval[];

    /**
     * Time intervals for a particular day
     */
    sunday:timeinterval.TimeInterval[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'monday', Class: timeinterval.TimeInterval, isArray: true,isRequired: false},
            {property: 'tuesday', Class: timeinterval.TimeInterval, isArray: true,isRequired: false},
            {property: 'wednesday', Class: timeinterval.TimeInterval, isArray: true,isRequired: false},
            {property: 'thursday', Class: timeinterval.TimeInterval, isArray: true,isRequired: false},
            {property: 'friday', Class: timeinterval.TimeInterval, isArray: true,isRequired: false},
            {property: 'saturday', Class: timeinterval.TimeInterval, isArray: true,isRequired: false},
            {property: 'sunday', Class: timeinterval.TimeInterval, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'WeeklyScheduleInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}