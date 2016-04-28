/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import blockednumberinfo = require('./BlockedNumberInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class BlockedNumbersList extends model.Model {

    /**
     * List of blocked phone numbers
     */
    records:blockednumberinfo.BlockedNumberInfo[];

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
            {property: 'records', Class: blockednumberinfo.BlockedNumberInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'BlockedNumbersList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}