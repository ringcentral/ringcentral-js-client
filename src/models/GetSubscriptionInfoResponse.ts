/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import notificationdeliverymode = require('./NotificationDeliveryMode');

export class GetSubscriptionInfoResponse extends model.Model {

    /**
     * Internal identifier of a subscription
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
     * Subscription expiration time
     */
    expirationTime:string;

    /**
     * Subscription lifetime in seconds. The default value is 900
     */
    expiresIn:number;

    /**
     * Subscription status
     */
    status:GetSubscriptionInfoResponseStatus;

    /**
     * Subscription creation time
     */
    creationTime:string;

    /**
     * Delivery mode data
     */
    deliveryMode:notificationdeliverymode.NotificationDeliveryMode;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'id', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'eventFilters', Class: null /* string[] */, isArray: true,isRequired: false},
            {property: 'expirationTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'expiresIn', Class: null /* number */, isArray: false,isRequired: false},
            {property: 'status', Class: GetSubscriptionInfoResponseStatus, isArray: false,isRequired: false},
            {property: 'creationTime', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'deliveryMode', Class: notificationdeliverymode.NotificationDeliveryMode, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'GetSubscriptionInfoResponse';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}

export enum GetSubscriptionInfoResponseStatus {
    Active = <any>'Active',
    Suspended = <any>'Suspended'
}