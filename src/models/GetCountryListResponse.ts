/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import countryinfo = require('./CountryInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetCountryListResponse extends model.Model {

    /**
     * List of countries with the country data
     */
    records:countryinfo.CountryInfo[];

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
            {property: 'records', Class: countryinfo.CountryInfo, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'GetCountryListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}