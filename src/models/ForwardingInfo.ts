/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import ruleinfo = require('./RuleInfo');

export class ForwardingInfo extends model.Model {

    /**
     * Specifies if the user's softphone(s) are notified before forwarding the incoming call to desk phones and forwarding numbers
     */
    notifyMySoftPhones:boolean;

    /**
     * For Internal Use Only. Specifies if the administrator's softphone is notified before forwarding the incoming call to desk phones and forwarding numbers. The default value is 'False'
     */
    notifyAdminSoftPhones:boolean;

    /**
     * Number of rings before forwarding starts
     */
    softPhonesRingCount:number;

    /**
     * Specifies the order in which forwarding numbers ring. 'Sequentially' means that forwarding numbers are ringing one at a time, in order of priority. 'Simultaneously' means that forwarding numbers are ring all at the same time
     */
    ringingMode:ForwardingInfoRingingMode;

    /**
     * Information on a call forwarding rule
     */
    rules:ruleinfo.RuleInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'notifyMySoftPhones', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'notifyAdminSoftPhones', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'softPhonesRingCount', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'ringingMode', Class: ForwardingInfoRingingMode, isArray: false,isRequired: false},
            {property: 'rules', Class: ruleinfo.RuleInfo, isArray: true,isRequired: false}
        ];

    }

    getClassName() {
        return 'ForwardingInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ForwardingInfoRingingMode {
    Sequentially = <any>'Sequentially',
    Simultaneously = <any>'Simultaneously'
}