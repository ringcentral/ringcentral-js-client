/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import deviceinfo = require('./DeviceInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class AccountDevices extends model.Model {

    /**
     * List of extension records
     */
    records:deviceinfo.DeviceInfo[];

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
            {property: 'records', Class: deviceinfo.DeviceInfo, isArray: true,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'AccountDevices';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}