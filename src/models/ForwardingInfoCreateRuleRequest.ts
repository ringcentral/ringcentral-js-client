/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import ruleinfocreaterulerequest = require('./RuleInfoCreateRuleRequest');

export class ForwardingInfoCreateRuleRequest extends model.Model {

    /**
     * Specifies if the first ring on desktop/mobile apps is enabled
     */
    notifyMySoftPhones:boolean;

    /**
     * Specifies delay between ring on apps and starting of a call forwarding
     */
    softPhonesRingCount:number;

    /**
     * Specifies the order in which forwarding numbers ring. 'Sequentially' means that forwarding numbers are ringing one at a time, in order of priority. 'Simultaneously' means that forwarding numbers are ring all at the same time
     */
    ringingMode:ForwardingInfoCreateRuleRequestRingingMode;

    /**
     * Information on a call forwarding rule
     */
    rules:ruleinfocreaterulerequest.RuleInfoCreateRuleRequest[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'notifyMySoftPhones', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'softPhonesRingCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'ringingMode', Class: ForwardingInfoCreateRuleRequestRingingMode, isArray: false,isRequired: false},
            {property: 'rules', Class: ruleinfocreaterulerequest.RuleInfoCreateRuleRequest, isArray: true,isRequired: true}
        ];

    }

    getClassName() {
        return 'ForwardingInfoCreateRuleRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ForwardingInfoCreateRuleRequestRingingMode {
    Sequentially = <any>'Sequentially',
    Simultaneously = <any>'Simultaneously'
}