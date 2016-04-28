/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class MessagesSyncInfo extends model.Model {

    /**
     * Type of synchronization
     */
    syncType:MessagesSyncInfoSyncType;

    /**
     * Synchronization token
     */
    syncToken:string;

    /**
     * Last synchronization datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    syncTime:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'syncType', Class: MessagesSyncInfoSyncType, isArray: false,isRequired: false},
            {property: 'syncToken', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'syncTime', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'MessagesSyncInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum MessagesSyncInfoSyncType {
    FSync = <any>'FSync',
    ISync = <any>'ISync'
}