/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import locationinfo = require('./LocationInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetLocationListResponse extends model.Model {

    /**
     * List of locations
     */
    records:locationinfo.LocationInfo[];

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
            {property: 'records', Class: locationinfo.LocationInfo, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetLocationListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}