/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ReportingRecurrenceInfo extends model.Model {

    /**
     * Pattern (frequency) of recurrence
     */
    pattern:ReportingRecurrenceInfoPattern;

    /**
     * Time and dates should be specified in UTC time zone
     */
    value:ReportingRecurrenceInfoValue;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'pattern', Class: ReportingRecurrenceInfoPattern, isArray: false,isRequired: false},
            {property: 'value', Class: ReportingRecurrenceInfoValue, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReportingRecurrenceInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ReportingRecurrenceInfoPattern {
    Daily = <any>'Daily',
    Weekly = <any>'Weekly',
    Monthly = <any>'Monthly'
}

export enum ReportingRecurrenceInfoValue {
    '0' = <any>'0',
    '1-7' = <any>'1-7',
    '1-31' = <any>'1-31',
    last = <any>'last'
}