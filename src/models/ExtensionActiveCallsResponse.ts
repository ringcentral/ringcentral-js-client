/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import calllogrecord = require('./CallLogRecord');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class ExtensionActiveCallsResponse extends model.Model {

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
            {property: 'records', Class: calllogrecord.CallLogRecord, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ExtensionActiveCallsResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}