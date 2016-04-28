/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class CustomDataRequest extends model.Model {

    /**
     * Custom data access key. Optional. If specified, must match the custom key in the URL
     */
    id:string;

    /**
     * Description of custom data. Mandatory for create, if there is no attachment specified. Maximum length is limited to 256 symbols
     */
    value:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'value', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CustomDataRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}