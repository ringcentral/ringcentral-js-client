/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import calllogrecord = require('./CallLogRecord');
import paginginfo = require('./PagingInfo');
import navigationinfo = require('./NavigationInfo');

export class ExtensionCallLogResponse extends model.Model {

    /**
     * List of call log records
     */
    records:calllogrecord.CallLogRecord[];

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
            {property: 'records', Class: calllogrecord.CallLogRecord, isArray: true,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ExtensionCallLogResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}