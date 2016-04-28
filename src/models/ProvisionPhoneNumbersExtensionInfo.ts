/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ProvisionPhoneNumbersExtensionInfo extends model.Model {

    /**
     * Internal identifier of an extension
     */
    id:string;

    /**
     * For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding account ID/extension ID for each partner ID of a client application. In request URIs partner IDs are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account IDs and extension IDs. In all request and response bodies these values are reflected via partnerId attributes of account and extension
     */
    partnerId:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'partnerId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ProvisionPhoneNumbersExtensionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}