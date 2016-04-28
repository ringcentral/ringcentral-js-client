/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import reportingpagesinfo = require('./ReportingPagesInfo');
import reportingschedulesinfo = require('./ReportingSchedulesInfo');

export class ReportingViewInfo extends model.Model {

    /**
     * User-defined name of a 'View'. The maximum value is 255
     */
    name:string;

    /**
     * List of pages, the max amount is 10
     */
    pages:reportingpagesinfo.ReportingPagesInfo[];

    /**
     * List of schedules, the max amount is 5. Each 'View' may have several schedules for reporting. For example, customer may want to get daily and weekly reports with the same set of settings
     */
    schedules:reportingschedulesinfo.ReportingSchedulesInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'name', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'pages', Class: reportingpagesinfo.ReportingPagesInfo, isArray: true,isRequired: true},
            {property: 'schedules', Class: reportingschedulesinfo.ReportingSchedulesInfo, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReportingViewInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}