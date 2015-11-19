/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import notificationdeliverymoderequest = require('./NotificationDeliveryModeRequest');

export class CreateSubscriptionRequest extends model.Model {

    /**
     * Mandatory. Collection of URIs to API resources (see Event Types for details). For APNS transport type only message event filter is available
     */
    eventFilters:string;

    /**
     * Notification delivery settings
     */
    deliveryMode:notificationdeliverymoderequest.NotificationDeliveryModeRequest;

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'eventFilters', Class: null /* string */, isArray: false,isRequired: false},
            {property: 'deliveryMode', Class: notificationdeliverymoderequest.NotificationDeliveryModeRequest, isArray: false,isRequired: true}
        ];

    }

    getClassName() {
        return 'CreateSubscriptionRequest';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}