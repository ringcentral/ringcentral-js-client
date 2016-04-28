/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class LookupPhoneNumberInfo extends model.Model {

    /**
     * Phone number in E.164 format without a '+'
     */
    phoneNumber:string;

    /**
     * Phone number formatted according to current brand's default country
     */
    formattedNumber:string;

    /**
     * Vanity pattern for this number. Returned only when vanity search option is requested. Vanity pattern corresponds to request parameters nxx plus line or numberPattern
     */
    vanityPattern:string;

    /**
     * The value is returned if the extendedSearch parameter is true. The values are 10, 9, 8, etc.; '10' is the closest match
     */
    rank:number;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'formattedNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'vanityPattern', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'rank', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'LookupPhoneNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}