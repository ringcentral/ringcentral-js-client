/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class NotificationDeliveryModeRequest extends model.Model {

    /**
     * Notifications transportation provider name
     */
    transportType:NotificationDeliveryModeRequestTransportType;

    /**
     * Mandatory for 'APNS' and 'WebHook' transport types. For 'APNS' - internal identifier of a device  device_token ; for 'WebHook' - URL of a consumer service (cannot be changed during subscription update)
     */
    address:string;

    /**
     * Optional. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'True' (even if specified as 'false'). If request contains only message event filters the value by default is 'False'
     */
    encryption:boolean;

    /**
     * Optional. Subscription lifetime in seconds. Max value is 30 days (604800 sec)
     */
    expiresIn:number;

    /**
     * Mandatory for 'PubNub/APNS/VoIP' transport type. Name of a certificate
     */
    certificateName:string;

    /**
     * Mandatory for 'PubNub/APNS/VoIP' transport type. Identifier of a registration
     */
    registrationId:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'transportType', Class: NotificationDeliveryModeRequestTransportType, isArray: false,isRequired: true},
            {property: 'address', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'encryption', Class: null /* boolean */, isArray: false,isRequired: false},
            {property: 'expiresIn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'certificateName', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'registrationId', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'NotificationDeliveryModeRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum NotificationDeliveryModeRequestTransportType {
    PubNub = <any>'PubNub',
    APNS = <any>'APNS',
    'PubNub/APNS/VoIP' = <any>'PubNub/APNS/VoIP',
    WebHook = <any>'WebHook'
}