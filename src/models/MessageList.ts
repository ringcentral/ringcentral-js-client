/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import messageinfo = require('./MessageInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class MessageList extends model.Model {

    /**
     * List of records with message information
     */
    records:messageinfo.MessageInfo[];

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
            {property: 'records', Class: messageinfo.MessageInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'MessageList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}