/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import calllogrecord = require('./CallLogRecord');
import syncinfocalllog = require('./SyncInfoCallLog');

export class CallLogSync extends model.Model {

    /**
     * List of call log records with synchronization information. For ISync the total number of returned records is limited to 250; this includes both new records and the old ones, specified by the recordCount parameter
     */
    records:calllogrecord.CallLogRecord[];

    /**
     * Sync type, token and time
     */
    syncInfo:syncinfocalllog.SyncInfoCallLog;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: calllogrecord.CallLogRecord, isArray: true,isRequired: true},
            {property: 'syncInfo', Class: syncinfocalllog.SyncInfoCallLog, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CallLogSync';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}