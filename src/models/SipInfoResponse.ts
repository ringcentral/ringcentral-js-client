/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import sipflagsinforesponse = require('./SipFlagsInfoResponse');

export class SipInfoResponse extends model.Model {

    /**
     * Preferred transport. SIP info will be returned for this transport if supported
     */
    transport:SipInfoResponseTransport;

    /**
     * User credentials
     */
    username:string;

    /**
     * User password
     */
    password:string;

    /**
     * Identifier for SIP authorization
     */
    authorizationId:string;

    /**
     * SIP domain
     */
    domain:string;

    /**
     * SIP outbound proxy
     */
    outboundProxy:string;

    /**
     * For TLS transport only Base64 encoded certificate
     */
    certificate:string;

    /**
     * SIP flags data
     */
    sipFlags:sipflagsinforesponse.SipFlagsInfoResponse;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'transport', Class: SipInfoResponseTransport, isArray: false,isRequired: false},
            {property: 'username', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'password', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'authorizationId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'domain', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'outboundProxy', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'certificate', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'sipFlags', Class: sipflagsinforesponse.SipFlagsInfoResponse, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'SipInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum SipInfoResponseTransport {
    UDP = <any>'UDP',
    TCP = <any>'TCP',
    TLS = <any>'TLS',
    WS = <any>'WS',
    WSS = <any>'WSS'
}