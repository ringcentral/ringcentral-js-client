/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import specialnumberinfo = require('./SpecialNumberInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class SpecialNumbers extends model.Model {

    /**
     * List of available special numbers with necessary information and limitations
     */
    records:specialnumberinfo.SpecialNumberInfo[];

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
            {property: 'records', Class: specialnumberinfo.SpecialNumberInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'SpecialNumbers';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}