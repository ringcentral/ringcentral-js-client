/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import getstateinforesponse = require('./GetStateInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetStateListResponse extends model.Model {

    /**
     * List of states
     */
    records:getstateinforesponse.GetStateInfoResponse[];

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
            {property: 'records', Class: getstateinforesponse.GetStateInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetStateListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}