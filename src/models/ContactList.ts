/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import personalcontactinfo = require('./PersonalContactInfo');
import navigationinfo = require('./NavigationInfo');
import paginginfo = require('./PagingInfo');

export class ContactList extends model.Model {

    /**
     * List of personal contacts from the extension address book
     */
    records:personalcontactinfo.PersonalContactInfo;

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
            {property: 'records', Class: personalcontactinfo.PersonalContactInfo, isArray: false,isRequired: true},
            {property: 'navigation', Class: navigationinfo.NavigationInfo, isArray: false,isRequired: true},
            {property: 'paging', Class: paginginfo.PagingInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ContactList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}