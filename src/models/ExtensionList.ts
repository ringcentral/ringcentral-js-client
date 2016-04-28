/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import extensioninfo = require('./ExtensionInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class ExtensionList extends model.Model {

    /**
     * List of extensions with extension information
     */
    records:extensioninfo.ExtensionInfo[];

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
            {property: 'records', Class: extensioninfo.ExtensionInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ExtensionList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}