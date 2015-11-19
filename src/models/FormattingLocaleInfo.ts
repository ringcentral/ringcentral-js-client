/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class FormattingLocaleInfo extends model.Model {

    /**
     * Internal identifier of a formatting language
     */
    id:string;

    /**
     * Localization code of a formatting language
     */
    localeCode:string;

    /**
     * Official name of a formatting language
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
        return 'FormattingLocaleInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}