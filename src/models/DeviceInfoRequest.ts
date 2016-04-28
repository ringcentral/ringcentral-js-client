/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class DeviceInfoRequest extends model.Model {

    /**
     * Device unique identifier, retrieved on previous session (if any)
     */
    id:string;

    /**
     * For iOS devices only Certificate name (used by iOS applications for APNS subscription)
     */
    appExternalId:string;

    /**
     * For SoftPhone only Computer name
     */
    computerName:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'appExternalId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'computerName', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'DeviceInfoRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}