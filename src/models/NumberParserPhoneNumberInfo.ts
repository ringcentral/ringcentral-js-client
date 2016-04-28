/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import numberparsercountryinfo = require('./NumberParserCountryInfo');

export class NumberParserPhoneNumberInfo extends model.Model {

    /**
     * Area code of the location (3-digit usually), according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See North American Numbering Plan for details
     */
    areaCode:string;

    /**
     * Information on a country the phone number belongs to
     */
    country:numberparsercountryinfo.NumberParserCountryInfo[];

    /**
     * Dialing format of a phone number
     */
    dialable:string;

    /**
     * E.164 (11-digits) format of a phone number
     */
    e164:string;

    /**
     * International format of a phone number
     */
    formattedInternational:string;

    /**
     * Domestic format of a phone number
     */
    formattedNational:string;

    /**
     * One of the numbers to be parsed, passed as a string in response
     */
    originalString:string;

    /**
     *  True  if the number is in a special format (for example N11 code)
     */
    special:boolean;

    /**
     * E.164 (11-digits) format of a phone number without the plus sign ('+')
     */
    normalized:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'areaCode', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'country', Class: numberparsercountryinfo.NumberParserCountryInfo, isArray: true,isRequired: false},
            {property: 'dialable', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'e164', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'formattedInternational', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'formattedNational', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'originalString', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'special', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'normalized', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'NumberParserPhoneNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}