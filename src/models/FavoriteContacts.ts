/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import favoritecontactinfo = require('./FavoriteContactInfo');

export class FavoriteContacts extends model.Model {

    /**
     * Canonical URI of a favorite contacts resource
     */
    uri:string;

    /**
     * List of favorite contacts. The maximum number of favorites is 100 per extension
     */
    records:favoritecontactinfo.FavoriteContactInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'records', Class: favoritecontactinfo.FavoriteContactInfo, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'FavoriteContacts';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}