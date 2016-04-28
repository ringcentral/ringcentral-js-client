/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import callersinforequest = require('./CallersInfoRequest');
import forwardinginfocreaterulerequest = require('./ForwardingInfoCreateRuleRequest');
import callednumberinforequest = require('./CalledNumberInfoRequest');
import unconditionalforwardinginforequest = require('./UnconditionalForwardingInfoRequest');

export class CreateAnsweringRuleRequest extends model.Model {

    /**
     * Type of an answering rule. The 'Custom' value should be specified
     */
    type:string;

    /**
     * Name of an answering rule specified by user
     */
    name:string;

    /**
     * Answering rule will be applied when calls are received from the specified caller(s)
     */
    callers:callersinforequest.CallersInfoRequest[];

    /**
     * Forwarding parameters. Should be specified if the 'callHandlingAction' parameter value is set to 'ForwardCalls'. These settings determine the forwarding numbers to which the call should be forwarded. If not specified in request, then the business-hours forwarding rules are set by default
     */
    forwarding:forwardinginfocreaterulerequest.ForwardingInfoCreateRuleRequest;

    /**
     * Answering rule will be applied when calling the specified number(s)
     */
    calledNumbers:callednumberinforequest.CalledNumberInfoRequest[];

    /**
     * Specifies how incoming calls should be forwarded. The default value is 'ForwardCalls'
     */
    callHandlingAction:CreateAnsweringRuleRequestCallHandlingAction;

    /**
     * Unconditional forwarding parameters. Should be specified if the 'callHandlingAction' parameter value is set to 'UnconditionalForwarding'
     */
    unconditionalForwarding:unconditionalforwardinginforequest.UnconditionalForwardingInfoRequest;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'type', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'callers', Class: callersinforequest.CallersInfoRequest, isArray: true,isRequired: false},
            {property: 'forwarding', Class: forwardinginfocreaterulerequest.ForwardingInfoCreateRuleRequest, isArray: false,isRequired: false},
            {property: 'calledNumbers', Class: callednumberinforequest.CalledNumberInfoRequest, isArray: true,isRequired: false},
            {property: 'callHandlingAction', Class: CreateAnsweringRuleRequestCallHandlingAction, isArray: false,isRequired: false},
            {property: 'unconditionalForwarding', Class: unconditionalforwardinginforequest.UnconditionalForwardingInfoRequest, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'CreateAnsweringRuleRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum CreateAnsweringRuleRequestCallHandlingAction {
    ForwardCalls = <any>'ForwardCalls',
    UnconditionalForwarding = <any>'UnconditionalForwarding'
}