/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import personalcontactinfo = require('./PersonalContactInfo');
import addressbooksyncinfo = require('./AddressBookSyncInfo');

export class AddressBookSync extends model.Model {

    /**
     * List of contacts with synchronization information
     */
    records:personalcontactinfo.PersonalContactInfo[];

    /**
     * Sync type, token and time
     */
    syncInfo:addressbooksyncinfo.AddressBookSyncInfo;

    /**
     * Internal identifier of the next page, if any
     */
    nextPageId:number;

    /**
     * URL of the next page, if any
     */
    nextPageUri:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: personalcontactinfo.PersonalContactInfo, isArray: true,isRequired: true},
            {property: 'syncInfo', Class: addressbooksyncinfo.AddressBookSyncInfo, isArray: false,isRequired: false},
            {property: 'nextPageId', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'nextPageUri', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AddressBookSync';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}