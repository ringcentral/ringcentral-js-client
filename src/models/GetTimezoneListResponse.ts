/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import gettimezoneinforesponse = require('./GetTimezoneInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetTimezoneListResponse extends model.Model {

    /**
     * List of timezones
     */
    records:gettimezoneinforesponse.GetTimezoneInfoResponse[];

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
            {property: 'records', Class: gettimezoneinforesponse.GetTimezoneInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetTimezoneListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}