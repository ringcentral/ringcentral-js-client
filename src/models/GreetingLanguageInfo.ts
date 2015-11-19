/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class GreetingLanguageInfo extends model.Model {

    /**
     * Internal identifier of a greeting language
     */
    id:string;

    /**
     * Localization code of a greeting language
     */
    localeCode:string;

    /**
     * Official name of a greeting language
     */
    name:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'localeCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'GreetingLanguageInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}