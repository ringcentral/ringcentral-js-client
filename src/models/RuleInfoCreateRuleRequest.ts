/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import forwardingnumberinforulescreaterulerequest = require('./ForwardingNumberInfoRulesCreateRuleRequest');

export class RuleInfoCreateRuleRequest extends model.Model {

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
    forwardingNumbers:forwardingnumberinforulescreaterulerequest.ForwardingNumberInfoRulesCreateRuleRequest[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'index', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'ringCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'forwardingNumbers', Class: forwardingnumberinforulescreaterulerequest.ForwardingNumberInfoRulesCreateRuleRequest, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'RuleInfoCreateRuleRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}