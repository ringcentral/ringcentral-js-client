/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import monitoredlinesextensioninfo = require('./MonitoredLinesExtensionInfo');

export class LineInfo extends model.Model {

    /**
     * Internal identifier of a monitored extension
     */
    id:string;

    /**
     * Canonical URI of a monitored extension
     */
    uri:string;

    /**
     * Brief information on a monitored extension
     */
    extension:monitoredlinesextensioninfo.MonitoredLinesExtensionInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'extension', Class: monitoredlinesextensioninfo.MonitoredLinesExtensionInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'LineInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}