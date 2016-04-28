/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import subscriptionlist = require('../models/SubscriptionList');
import subscriptioninfo = require('../models/SubscriptionInfo');
import createsubscriptionrequest = require('../models/CreateSubscriptionRequest');
import modifysubscriptionrequest = require('../models/ModifySubscriptionRequest');

export class PushNotifications extends client.Client {

    /**
     * Get Subscription List
     *
     * <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p>
     * <p>Returns a list of subscriptions created by a particular user on a particular client app.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadSubscriptionList(options?:{
    }):Promise<subscriptionlist.SubscriptionList> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/subscription', options, loadSubscriptionListOptions),
                         subscriptionlist.SubscriptionList);

    }

    /**
     * Create Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Creates a new subscription.</p>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    createSubscription(options?:{
        /** If 'True' then aggregated presence status is returned in a notification payload in the 'presenceStatus' field */
        'aggregated'?:boolean;
        /** JSON body */
        'body':createsubscriptionrequest.CreateSubscriptionRequest;
    }):Promise<subscriptioninfo.SubscriptionInfo> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/subscription', options, createSubscriptionOptions),
                         subscriptioninfo.SubscriptionInfo);

    }

    /**
     * Get Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Returns the requested subscription.</p>
     * <h4>API Group</h4>
     * <p>Light</p>
     */
    loadSubscription(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
    }):Promise<subscriptioninfo.SubscriptionInfo> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/subscription/{subscriptionId}', options, loadSubscriptionOptions),
                         subscriptioninfo.SubscriptionInfo);

    }

    /**
     * Renew Subscription / Update Event Filters
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Renews the existent subscription if the request body is empty. If event filters are specified, calling this method modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications
     *     in the frame of one subscription.</p>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    updateSubscription(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
        /** JSON body */
        'body':modifysubscriptionrequest.ModifySubscriptionRequest;
    }):Promise<subscriptioninfo.SubscriptionInfo> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/subscription/{subscriptionId}', options, updateSubscriptionOptions),
                         subscriptioninfo.SubscriptionInfo);

    }

    /**
     * Cancel Subscription
     *
     * <p style='font-style:italic;'></p>
     * <p>Cancels the existent subscription.</p>
     * <h4>API Group</h4>
     * <p>Medium</p>
     */
    deleteSubscription(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/subscription/{subscriptionId}', options, deleteSubscriptionOptions),
                         null);

    }

}

/**
 * Definition of options for loadSubscriptionList operation
 */
export var loadSubscriptionListOptions:client.IOperationParameter[] = [];

/**
 * Definition of options for createSubscription operation
 */
export var createSubscriptionOptions:client.IOperationParameter[] = [
    {
        "name": "aggregated",
        "type": "boolean",
        "in": "query",
        "required": false
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "createsubscriptionrequest.CreateSubscriptionRequest"
    }
];

/**
 * Definition of options for loadSubscription operation
 */
export var loadSubscriptionOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for updateSubscription operation
 */
export var updateSubscriptionOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "in": "body",
        "required": true,
        "type": "modifysubscriptionrequest.ModifySubscriptionRequest"
    }
];

/**
 * Definition of options for deleteSubscription operation
 */
export var deleteSubscriptionOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];