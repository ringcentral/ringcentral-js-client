/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import dictionarystateinfo = require('./DictionaryStateInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class DictionaryStateList extends model.Model {

    /**
     * List of states
     */
    records:dictionarystateinfo.DictionaryStateInfo[];

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
            {property: 'records', Class: dictionarystateinfo.DictionaryStateInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'DictionaryStateList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}