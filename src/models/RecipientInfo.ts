/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class RecipientInfo extends model.Model {

    /**
     * Link to a recipient extension resource
     */
    uri:string;

    /**
     * Internal identifier of a recipient extension
     */
    id:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'RecipientInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}