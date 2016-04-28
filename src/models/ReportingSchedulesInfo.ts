/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import reportingrecurrenceinfo = require('./ReportingRecurrenceInfo');
import reportingattachmentinfo = require('./ReportingAttachmentInfo');

export class ReportingSchedulesInfo extends model.Model {

    /**
     * Unique schedule identifier
     */
    scheduleId:string;

    /**
     * Recurrence pattern of a schedule
     */
    recurrence:reportingrecurrenceinfo.ReportingRecurrenceInfo[];

    /**
     * Type of report. Detailed reports include tables with data. Simple reports only include charts
     */
    viewType:ReportingSchedulesInfoViewType;

    /**
     * Set of optional attachments. Basically, every report email is in HTML format. Optionally, it can contain PDF or CSV files
     */
    attachments:reportingattachmentinfo.ReportingAttachmentInfo[];

    /**
     * List of pages to include to the report. If empty, all pages are included. Otherwise, only specified pages are included. API doesn't check validity of page names. Client application is responsible to do that
     */
    pages:string[];

    /**
     * List of emails to which to send rendered reports
     */
    recipients:string[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'scheduleId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'recurrence', Class: reportingrecurrenceinfo.ReportingRecurrenceInfo, isArray: true,isRequired: false},
            {property: 'viewType', Class: ReportingSchedulesInfoViewType, isArray: false,isRequired: false},
            {property: 'attachments', Class: reportingattachmentinfo.ReportingAttachmentInfo, isArray: true,isRequired: false},
            {property: 'pages', Class: null /* string[] */, isArray: true,isRequired: false},
            {property: 'recipients', Class: null /* string[] */, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReportingSchedulesInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ReportingSchedulesInfoViewType {
    Detailed = <any>'Detailed',
    Simple = <any>'Simple'
}