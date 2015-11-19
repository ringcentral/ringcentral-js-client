/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class LanguageInfo extends model.Model {

    /**
     * Internal identifier of a language
     */
    id:string;

    /**
     * Canonical URI of a language
     */
    uri:string;

    /**
     * Indicates whether a language is available as greeting language
     */
    greeting:boolean;

    /**
     * Indicates whether a language is available as formatting locale
     */
    formattingLocale:boolean;

    /**
     * Localization code of a language
     */
    localeCode:string;

    /**
     * Official name of a language
     */
    name:string;

    /**
     * Indicates whether a language is available as UI language
     */
    ui:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'greeting', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'formattingLocale', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'localeCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'ui', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'LanguageInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}