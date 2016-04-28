/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import businessaddressinfo = require('./BusinessAddressInfo');

export class AccountBusinessAddress extends model.Model {

    /**
     * Canonical URI of an account business address
     */
    uri:string;

    /**
     * Company business name
     */
    company:string;

    /**
     * Company business email address
     */
    email:string;

    /**
     * Company business address
     */
    businessAddress:businessaddressinfo.BusinessAddressInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'company', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'email', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessAddress', Class: businessaddressinfo.BusinessAddressInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'AccountBusinessAddress';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}