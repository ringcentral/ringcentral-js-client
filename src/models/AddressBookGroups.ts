/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import addressbookgroupinfo = require('./AddressBookGroupInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class AddressBookGroups extends model.Model {

    /**
     * List of groups
     */
    records:addressbookgroupinfo.AddressBookGroupInfo[];

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
            {property: 'records', Class: addressbookgroupinfo.AddressBookGroupInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'AddressBookGroups';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}