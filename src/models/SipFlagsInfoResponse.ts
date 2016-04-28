/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class SipFlagsInfoResponse extends model.Model {

    /**
     * If 'True' VoIP calling feature is enabled
     */
    voipFeatureEnabled:SipFlagsInfoResponseVoipFeatureEnabled;

    /**
     * If 'True' the request is sent from IP address of a country blocked for VoIP calling
     */
    voipCountryBlocked:SipFlagsInfoResponseVoipCountryBlocked;

    /**
     * If 'True' outbound calls are enabled
     */
    outboundCallsEnabled:SipFlagsInfoResponseOutboundCallsEnabled;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'voipFeatureEnabled', Class: SipFlagsInfoResponseVoipFeatureEnabled, isArray: false,isRequired: false},
            {property: 'voipCountryBlocked', Class: SipFlagsInfoResponseVoipCountryBlocked, isArray: false,isRequired: false},
            {property: 'outboundCallsEnabled', Class: SipFlagsInfoResponseOutboundCallsEnabled, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'SipFlagsInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum SipFlagsInfoResponseVoipFeatureEnabled {
    True = <any>'True',
    False = <any>'False'
}

export enum SipFlagsInfoResponseVoipCountryBlocked {
    True = <any>'True',
    False = <any>'False'
}

export enum SipFlagsInfoResponseOutboundCallsEnabled {
    True = <any>'True',
    False = <any>'False'
}