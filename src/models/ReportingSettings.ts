/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import reportingviewinfo = require('./ReportingViewInfo');

export class ReportingSettings extends model.Model {

    /**
     * List of 'View' structures with a tuple of filter values, pages and schedules
     */
    views:reportingviewinfo.ReportingViewInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'views', Class: reportingviewinfo.ReportingViewInfo, isArray: true,isRequired: true}
        ];

    }

    getClassName() {
        return 'ReportingSettings';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}