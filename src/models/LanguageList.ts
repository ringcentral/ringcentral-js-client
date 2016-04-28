/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import languageinfo = require('./LanguageInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class LanguageList extends model.Model {

    /**
     * Canonical URI of the language list resource
     */
    uri:string;

    /**
     * Language data
     */
    records:languageinfo.LanguageInfo[];

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
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'records', Class: languageinfo.LanguageInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'LanguageList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}