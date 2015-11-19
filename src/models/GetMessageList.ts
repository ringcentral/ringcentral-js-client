/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import getmessageinforesponse = require('./GetMessageInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetMessageList extends model.Model {

    /**
     * List of records with message information
     */
    records:getmessageinforesponse.GetMessageInfoResponse[];

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
            {property: 'records', Class: getmessageinforesponse.GetMessageInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetMessageList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}