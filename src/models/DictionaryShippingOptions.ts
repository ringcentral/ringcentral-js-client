/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import shippingmethodinfo = require('./ShippingMethodInfo');

export class DictionaryShippingOptions extends model.Model {

    /**
     * Quantity of devices to ship
     */
    quantity:number;

    /**
     * Price for shipping with the specified method (depending on the quantity value)
     */
    price:number;

    /**
     * Shipping method description
     */
    method:shippingmethodinfo.ShippingMethodInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'quantity', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'price', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'method', Class: shippingmethodinfo.ShippingMethodInfo, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'DictionaryShippingOptions';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}