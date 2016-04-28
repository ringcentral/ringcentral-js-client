/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import forwardinginfocreaterulerequest = require('./ForwardingInfoCreateRuleRequest');

export class UpdateAnsweringRuleRequest extends model.Model {

    /**
     * Specifies if the answering rule is active or not
     */
    enabled:boolean;

    /**
     * Custom name of an answering rule. The maximum number of characters is 64
     */
    name:string;

    /**
     * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
     */
    forwarding:forwardinginfocreaterulerequest.ForwardingInfoCreateRuleRequest;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'forwarding', Class: forwardinginfocreaterulerequest.ForwardingInfoCreateRuleRequest, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'UpdateAnsweringRuleRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}