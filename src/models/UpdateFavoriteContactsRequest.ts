/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import favoritecontactinfo = require('./FavoriteContactInfo');

export class UpdateFavoriteContactsRequest extends model.Model {

    /**
     * List of favorite contacts
     */
    records:favoritecontactinfo.FavoriteContactInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'records', Class: favoritecontactinfo.FavoriteContactInfo, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'UpdateFavoriteContactsRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}