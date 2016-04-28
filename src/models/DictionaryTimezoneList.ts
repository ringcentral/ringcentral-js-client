/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import dictionarytimezoneinfo = require('./DictionaryTimezoneInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class DictionaryTimezoneList extends model.Model {

    /**
     * List of timezones
     */
    records:dictionarytimezoneinfo.DictionaryTimezoneInfo[];

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
            {property: 'records', Class: dictionarytimezoneinfo.DictionaryTimezoneInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'DictionaryTimezoneList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}