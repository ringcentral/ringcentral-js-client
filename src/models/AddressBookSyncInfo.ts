/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class AddressBookSyncInfo extends model.Model {

    /**
     * Type of synchronization
     */
    syncType:AddressBookSyncInfoSyncType;

    /**
     * Synchronization token
     */
    syncToken:string;

    /**
     * Datetime of last synchronization in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    syncTime:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'syncType', Class: AddressBookSyncInfoSyncType, isArray: false,isRequired: false},
            {property: 'syncToken', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'syncTime', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AddressBookSyncInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum AddressBookSyncInfoSyncType {
    FSync = <any>'FSync',
    ISync = <any>'ISync'
}