/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import forwardingnumberinfo = require('./ForwardingNumberInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class ExtensionForwardingNumberList extends model.Model {

    /**
     * List of forwarding phone numbers
     */
    records:forwardingnumberinfo.ForwardingNumberInfo[];

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
            {property: 'records', Class: forwardingnumberinfo.ForwardingNumberInfo, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ExtensionForwardingNumberList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}