/// <reference path="../externals.d.ts" />

import client = require('../core/Client');
import getsubscriptioninforesponse = require('../models/GetSubscriptionInfoResponse');
import createsubscriptionrequest = require('../models/CreateSubscriptionRequest');
import modifysubscriptionrequest = require('../models/ModifySubscriptionRequest');

export class NotificationsSubscriptionAPI extends client.Client {

    /**
     * Create Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Creates a new subscription. To call this method with APNS transport type you have to specify endpoint_id attribute in get token request at authorization.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    create(options?:{
        /** JSON body */
        'body':createsubscriptionrequest.CreateSubscriptionRequest;
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        return this.send(this.parseOptions('POST', '/restapi/v1.0/subscription', options, createOptions),
                         getsubscriptioninforesponse.GetSubscriptionInfoResponse);

    }

    /**
     * Get Subscription
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>Returns the requested subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Light</p>
     */
    load(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        return this.send(this.parseOptions('GET', '/restapi/v1.0/subscription/{subscriptionId}', options, loadOptions),
                         getsubscriptioninforesponse.GetSubscriptionInfoResponse);

    }

    /**
     * Renew Subscription / Modify Event Filters
     *
     * <p style='font-style:italic;'>Since 1.0.6 (Release 5.15)</p>
     * <p>With empty request body - renews the existent subscription. If event filters specified - modifies the event filters for the existing subscription. The client application can extend or narrow the events for which it receives notifications in the frame
     *     of one subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    update(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
        /** JSON body */
        'body':modifysubscriptionrequest.ModifySubscriptionRequest;
    }):Promise<getsubscriptioninforesponse.GetSubscriptionInfoResponse> {

        return this.send(this.parseOptions('PUT', '/restapi/v1.0/subscription/{subscriptionId}', options, updateOptions),
                         getsubscriptioninforesponse.GetSubscriptionInfoResponse);

    }

    /**
     * Cancel Subscription
     *
     * <p style='font-style:italic;'></p>
     * <p>Cancels the existent subscription.</p>
     * <h4>Usage Plan Group</h4>
     * <p>Medium</p>
     */
    remove(options?:{
        /** Internal identifier of a subscription */
        'subscriptionId':string;
    }):Promise<any> {

        return this.send(this.parseOptions('DELETE', '/restapi/v1.0/subscription/{subscriptionId}', options, removeOptions),
                         null);

    }

}

/**
 * Definition of options for create operation
 */
export var createOptions:client.IOperationParameter[] = [
    {
        "name": "body",
        "type": "createsubscriptionrequest.CreateSubscriptionRequest",
        "in": "body",
        "required": true
    }
];

/**
 * Definition of options for load operation
 */
export var loadOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];

/**
 * Definition of options for update operation
 */
export var updateOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    },
    {
        "name": "body",
        "type": "modifysubscriptionrequest.ModifySubscriptionRequest",
        "in": "body",
        "required": true
    }
];

/**
 * Definition of options for remove operation
 */
export var removeOptions:client.IOperationParameter[] = [
    {
        "name": "subscriptionId",
        "type": "string",
        "in": "path",
        "required": true
    }
];