/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import phonenumberinfo = require('./PhoneNumberInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class ExtensionPhoneNumbers extends model.Model {

    /**
     * List of phone numbers
     */
    records:phonenumberinfo.PhoneNumberInfo[];

    /**
     * Information on navigation
     */
    navigation:navigationinfo.NavigationInfo;

    /**
     * Information on paging
     */
    paging:paginginfo.PagingInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: phonenumberinfo.PhoneNumberInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ExtensionPhoneNumbers';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}