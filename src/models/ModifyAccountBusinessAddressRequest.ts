/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import businessaddressinfo = require('./BusinessAddressInfo');

export class ModifyAccountBusinessAddressRequest extends model.Model {

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
            {property: 'company', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'email', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'businessAddress', Class: businessaddressinfo.BusinessAddressInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'ModifyAccountBusinessAddressRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}