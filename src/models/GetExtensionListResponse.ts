/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import getextensioninforesponse = require('./GetExtensionInfoResponse');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class GetExtensionListResponse extends model.Model {

    /**
     * List of extensions with extension information
     */
    records:getextensioninforesponse.GetExtensionInfoResponse[];

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
            {property: 'records', Class: getextensioninforesponse.GetExtensionInfoResponse, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GetExtensionListResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}