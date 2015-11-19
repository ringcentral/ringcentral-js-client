/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class TimezoneInfo extends model.Model {

    /**
     * Internal identifier of a timezone
     */
    id:string;

    /**
     * Canonical URI of a timezone
     */
    uri:string;

    /**
     * Short name of a timezone
     */
    name:string;

    /**
     * Meaningful description of the timezone
     */
    description:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'description', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'TimezoneInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}