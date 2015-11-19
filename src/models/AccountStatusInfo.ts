/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class AccountStatusInfo extends model.Model {

    /**
     * Reason
     */
    reason:string;

    /**
     * Comment
     */
    comment:string;

    /**
     * Lifetime
     */
    lifetime:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'reason', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'comment', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lifetime', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AccountStatusInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}