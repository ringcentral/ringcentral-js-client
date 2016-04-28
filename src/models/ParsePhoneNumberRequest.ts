/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ParsePhoneNumberRequest extends model.Model {

    /**
     * Phone numbers passed in a list. The maximum value of phone numbers is limited to 64. The maximum number of symbols in each phone number in a string is 64
     */
    originalStrings:string[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'originalStrings', Class: null /* string[] */, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'ParsePhoneNumberRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}