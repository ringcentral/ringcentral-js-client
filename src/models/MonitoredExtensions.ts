/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import lineinfo = require('./LineInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class MonitoredExtensions extends model.Model {

    /**
     * Canonical URI of the monitored lines (extensions) resource
     */
    uri:string;

    /**
     * List of lines (extensions) the presence of which is monitored by the user. The first two lines always indicate the user's extension presence, they cannot be changed
     */
    records:lineinfo.LineInfo[];

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
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'records', Class: lineinfo.LineInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'MonitoredExtensions';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}