/// <reference path="../externals.d.ts" />

import model = require('../core/Model');

export class NotificationDeliveryMode extends model.Model {

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    transportType:NotificationDeliveryModeTransportType;

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. For APNS transport type the value is always  false 
     */
    encryption:boolean;

    /**
     * PubNub channel name. For APNS transport type - internal identifier of a device  device_token . For 'WebHook' - URL of consumer service
     */
    address:string;

    /**
     * For 'PubNub' and 'PubNub/APNS/VoIP' transport types. PubNub subscriber credentials required to subscribe to the channel
     */
    subscriberKey:string;

    /**
     * For 'PubNub' and 'PubNub/APNS/VoIP' transport types. Encryption algorithm 'AES'
     */
    encryptionAlgorithm:string;

    /**
     * For 'PubNub' and 'PubNub/APNS/VoIP' transport types. Key for notification message decryption
     */
    encryptionKey:string;

    /**
     * For 'PubNub/APNS/VoIP' transport type. Identifier of a registration
     */
    registrationId:string;

    /**
     * For 'PubNub/APNS/VoIP' transport type. Name of a certificate
     */
    certificateName:string;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'transportType', Class: NotificationDeliveryModeTransportType, isArray: false,isRequired: true},
            {property: 'encryption', Class: null /* boolean */, isArray: false,isRequired: true},
            {property: 'address', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'subscriberKey', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'encryptionAlgorithm', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'encryptionKey', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'registrationId', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'certificateName', Class: null /* string */, isArray: false,isRequired: false}
        ];

    }

    getClassName() {
        return 'NotificationDeliveryMode';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum NotificationDeliveryModeTransportType {
    PubNub = <any>'PubNub',
    APNS = <any>'APNS',
    'PubNub/APNS/VoIP' = <any>'PubNub/APNS/VoIP',
    WebHook = <any>'WebHook'
}