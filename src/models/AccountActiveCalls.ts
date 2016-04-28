/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import calllogrecord = require('./CallLogRecord');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class AccountActiveCalls extends model.Model {

    /**
     * List of call log records
     */
    records:calllogrecord.CallLogRecord[];

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
            {property: 'records', Class: calllogrecord.CallLogRecord, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'AccountActiveCalls';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}