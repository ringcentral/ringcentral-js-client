/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import forwardingnumberinforules = require('./ForwardingNumberInfoRules');

export class RuleInfo extends model.Model {

    /**
     * Forwarding number (or group) ordinal
     */
    index:number;

    /**
     * Number of rings for a forwarding number (or group)
     */
    ringCount:number;

    /**
     * Forwarding number (or group) data
     */
    forwardingNumbers:forwardingnumberinforules.ForwardingNumberInfoRules[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'index', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'ringCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'forwardingNumbers', Class: forwardingnumberinforules.ForwardingNumberInfoRules, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'RuleInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}