/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import dictionarycountryinfo = require('./DictionaryCountryInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class CountryList extends model.Model {

    /**
     * List of countries with the country data
     */
    records:dictionarycountryinfo.DictionaryCountryInfo[];

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
            {property: 'records', Class: dictionarycountryinfo.DictionaryCountryInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'CountryList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}