/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ClientProvisioningHintInfo extends model.Model {

    /**
     * Seconds until expiration date. Returned only if applicable
     */
    expiresIn:number;

    /**
     * 'False', if the value of expiresIn is greater than 0 (zero), otherwise - 'True'
     */
    actionRequired:boolean;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'expiresIn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'actionRequired', Class: null /* boolean */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ClientProvisioningHintInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}