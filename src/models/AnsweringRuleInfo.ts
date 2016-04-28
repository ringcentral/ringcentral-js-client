/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import scheduleinfo = require('./ScheduleInfo');
import callednumberinfo = require('./CalledNumberInfo');
import callersinfo = require('./CallersInfo');
import forwardinginfo = require('./ForwardingInfo');
import unconditionalforwardinginfo = require('./UnconditionalForwardingInfo');
import voicemailinfo = require('./VoicemailInfo');

export class AnsweringRuleInfo extends model.Model {

    /**
     * Canonical URI to the answering rule resource
     */
    uri:string;

    /**
     * Internal identifier of an asnwering rule
     */
    id:string;

    /**
     * Type of an answering rule
     */
    type:AnsweringRuleInfoType;

    /**
     * Name of an answering rule specified by user
     */
    name:string;

    /**
     * Specifies if an answering rule is active or inactive
     */
    enabled:boolean;

    /**
     * Schedule when an answering rule should be applied
     */
    schedule:scheduleinfo.ScheduleInfo;

    /**
     * Answering rules are applied when calling to selected number(s)
     */
    calledNumbers:callednumberinfo.CalledNumberInfo[];

    /**
     * Answering rules are applied when calls are received from specified caller(s)
     */
    callers:callersinfo.CallersInfo[];

    /**
     * Specifies how incoming calls are forwarded
     */
    callHandlingAction:AnsweringRuleInfoCallHandlingAction;

    /**
     * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
     */
    forwarding:forwardinginfo.ForwardingInfo;

    /**
     * Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'
     */
    unconditionalForwarding:unconditionalforwardinginfo.UnconditionalForwardingInfo;

    /**
     * Specifies whether to take a voicemail and who should do it
     */
    voicemail:voicemailinfo.VoicemailInfo;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'type', Class: AnsweringRuleInfoType, isArray: false,isRequired: false},
            {property: 'name', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'enabled', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'schedule', Class: scheduleinfo.ScheduleInfo, isArray: false,isRequired: false},
            {property: 'calledNumbers', Class: callednumberinfo.CalledNumberInfo, isArray: true,isRequired: false},
            {property: 'callers', Class: callersinfo.CallersInfo, isArray: true,isRequired: false},
            {property: 'callHandlingAction', Class: AnsweringRuleInfoCallHandlingAction, isArray: false,isRequired: false},
            {property: 'forwarding', Class: forwardinginfo.ForwardingInfo, isArray: false,isRequired: false},
            {property: 'unconditionalForwarding', Class: unconditionalforwardinginfo.UnconditionalForwardingInfo, isArray: false,isRequired: false},
            {property: 'voicemail', Class: voicemailinfo.VoicemailInfo, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'AnsweringRuleInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum AnsweringRuleInfoType {
    BusinessHours = <any>'BusinessHours',
    AfterHours = <any>'AfterHours',
    Custom = <any>'Custom'
}

export enum AnsweringRuleInfoCallHandlingAction {
    ForwardCalls = <any>'ForwardCalls',
    TakeMessagesOnly = <any>'TakeMessagesOnly',
    PlayAnnouncementOnly = <any>'PlayAnnouncementOnly',
    UnconditionalForwarding = <any>'UnconditionalForwarding'
}