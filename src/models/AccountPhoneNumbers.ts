/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import phonenumberinfo = require('./PhoneNumberInfo');
import paginginfo = require('./PagingInfo');
import navigationinfo = require('./NavigationInfo');

export class AccountPhoneNumbers extends model.Model {

    /**
     * List of account phone numbers
     */
    records:phonenumberinfo.PhoneNumberInfo[];

    /**
     * Information on paging
     */
    paging:paginginfo.PagingInfo;

    /**
     * Information on navigation
     */
    navigation:navigationinfo.NavigationInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: phonenumberinfo.PhoneNumberInfo, isArray: true,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'AccountPhoneNumbers';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}