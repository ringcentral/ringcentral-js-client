/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import locationinfo = require('./LocationInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class DictionaryLocationList extends model.Model {

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
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'DictionaryLocationList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}