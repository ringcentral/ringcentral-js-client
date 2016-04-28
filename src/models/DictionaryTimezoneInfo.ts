/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class DictionaryTimezoneInfo extends model.Model {

    /**
     * Internal identifier of a timezone
     */
    id:string;

    /**
     * Canonical URI of the timezone
     */
    uri:string;

    /**
     * Short name of the timezone
     */
    name:string;

    /**
     * Description of the timezone
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
        return 'DictionaryTimezoneInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}