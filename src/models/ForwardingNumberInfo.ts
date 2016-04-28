/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class ForwardingNumberInfo extends model.Model {

    /**
     * Internal identifier of a forwarding/call flip phone number
     */
    id:string;

    /**
     * Canonical URI of a forwarding/call flip phone number
     */
    uri:string;

    /**
     * Forwarding/Call flip phone number
     */
    phoneNumber:string;

    /**
     * Forwarding/Call flip number title
     */
    label:string;

    /**
     * Type of option this phone number is used for. Multiple values are accepted
     */
    features:ForwardingNumberInfoFeatures;

    /**
     * Number assigned to the call flip phone number, corresponds to the shortcut dial number
     */
    flipNumber:number;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'phoneNumber', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'label', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'features', Class: ForwardingNumberInfoFeatures, isArray: false,isRequired: false},
            {property: 'flipNumber', Class: null /* number */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'ForwardingNumberInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum ForwardingNumberInfoFeatures {
    CallFlip = <any>'CallFlip',
    CallForwarding = <any>'CallForwarding'
}