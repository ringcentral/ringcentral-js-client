/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class SyncInfoCallLog extends model.Model {

    /**
     * Type of synchronization
     */
    syncType:SyncInfoCallLogSyncType;

    /**
     * Synchronization token
     */
    syncToken:string;

    /**
     * The last synchronization datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    syncTime:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'syncType', Class: SyncInfoCallLogSyncType, isArray: false,isRequired: false},
            {property: 'syncToken', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'syncTime', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'SyncInfoCallLog';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum SyncInfoCallLogSyncType {
    FSync = <any>'FSync',
    ISync = <any>'ISync'
}