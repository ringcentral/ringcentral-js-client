/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ReportingAttachmentInfo extends model.Model {

    /**
     * Specifies whether to include CSV version of the report
     */
    csv:boolean;

    /**
     * Specifies whether to include PDF version of the report
     */
    pdf:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'csv', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'pdf', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ReportingAttachmentInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}