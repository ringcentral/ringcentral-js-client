/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import secretquestioninfo = require('./SecretQuestionInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class DictionarySecretQuestionList extends model.Model {

    /**
     * Canonical URI of a question list resource
     */
    uri:string;

    /**
     * List of secret questions with their descriptions
     */
    records:secretquestioninfo.SecretQuestionInfo[];

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
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'records', Class: secretquestioninfo.SecretQuestionInfo, isArray: true,isRequired: false},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: false},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DictionarySecretQuestionList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}