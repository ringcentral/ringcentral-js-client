/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ShippingMethodInfo extends model.Model {

    /**
     * Internal identifier of the shipping method
     */
    id:number;

    /**
     * Name/description of the shipping method
     */
    name:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ShippingMethodInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}