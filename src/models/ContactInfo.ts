/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import contactaddressinfo = require('./ContactAddressInfo');

export class ContactInfo extends model.Model {

    /**
     * For User extension type only. Extension user first name
     */
    firstName:string;

    /**
     * For User extension type only. Extension user last name
     */
    lastName:string;

    /**
     * Extension user company name
     */
    company:string;

    /**
     * Email of extension user
     */
    email:string;

    /**
     * Extension user contact phone number
     */
    businessPhone:string;

    /**
     * Business address of extension user company
     */
    businessAddress:contactaddressinfo.ContactAddressInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'firstName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'lastName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'company', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'email', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessPhone', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessAddress', Class: contactaddressinfo.ContactAddressInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ContactInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}