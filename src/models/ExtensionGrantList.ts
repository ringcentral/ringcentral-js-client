/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import grantinfo = require('./GrantInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class ExtensionGrantList extends model.Model {

    /**
     * List of extension grants with the data
     */
    records:grantinfo.GrantInfo[];

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
            {property: 'records', Class: grantinfo.GrantInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ExtensionGrantList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}