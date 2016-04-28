/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class SipInfoRequest extends model.Model {

    /**
     * Supported transport. SIP info will be returned for this transport if supported
     */
    transport:SipInfoRequestTransport;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'transport', Class: SipInfoRequestTransport, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'SipInfoRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum SipInfoRequestTransport {
    UDP = <any>'UDP',
    TCP = <any>'TCP',
    TLS = <any>'TLS',
    WS = <any>'WS',
    WSS = <any>'WSS'
}