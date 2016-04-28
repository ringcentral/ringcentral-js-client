/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import dialingplancountryinfo = require('./DialingPlanCountryInfo');
import paginginfo = require('./PagingInfo');
import navigationinfo = require('./NavigationInfo');

export class DialingPlanInfo extends model.Model {

    /**
     * List of countries which can be selected for a dialing plan
     */
    records:dialingplancountryinfo.DialingPlanCountryInfo[];

    /**
     * Information on paging
     */
    paging:paginginfo.PagingInfo;

    /**
     * Information on navigation
     */
    navigation:navigationinfo.NavigationInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: dialingplancountryinfo.DialingPlanCountryInfo, isArray: true,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'DialingPlanInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}