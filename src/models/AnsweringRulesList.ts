/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import answeringruleinfo = require('./AnsweringRuleInfo');
import paginginfo = require('./PagingInfo');
import navigationinfo = require('./NavigationInfo');

export class AnsweringRulesList extends model.Model {

    /**
     * Canonical URI of an answering rule resource
     */
    uri:string;

    /**
     * List of answering rules
     */
    records:answeringruleinfo.AnsweringRuleInfo[];

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
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'records', Class: answeringruleinfo.AnsweringRuleInfo, isArray: true,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'AnsweringRulesList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}