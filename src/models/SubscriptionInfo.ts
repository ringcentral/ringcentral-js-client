/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import notificationdeliverymode = require('./NotificationDeliveryMode');

export class SubscriptionInfo extends model.Model {

    /**
     * Internal identifier of a subscription, for APNS it is generated
     */
    id:string;

    /**
     * Canonical URI of a subscription
     */
    uri:string;

    /**
     * Collection of URIs to API resources (message-store/presence/detailed presence)
     */
    eventFilters:string[];

    /**
     * Subscription expiration datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. Not returned for 'APNS' and 'WebHook'
     */
    expirationTime:string;

    /**
     * Subscription lifetime in seconds
     */
    expiresIn:number;

    /**
     * Subscription status
     */
    status:SubscriptionInfoStatus;

    /**
     * Subscription creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    creationTime:string;

    /**
     * Delivery mode data
     */
    deliveryMode:notificationdeliverymode.NotificationDeliveryMode;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'eventFilters', Class: null /* string[] */, isArray: true,isRequired: true},
            {property: 'expirationTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'expiresIn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'status', Class: SubscriptionInfoStatus, isArray: false,isRequired: true},
            {property: 'creationTime', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'deliveryMode', Class: notificationdeliverymode.NotificationDeliveryMode, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'SubscriptionInfo';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum SubscriptionInfoStatus {
    Active = <any>'Active',
    Suspended = <any>'Suspended'
}