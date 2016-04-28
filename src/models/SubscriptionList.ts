/// <reference path="../externals.d.ts" />

import model = require('../core/Model');
import subscriptioninfo = require('./SubscriptionInfo');

export class SubscriptionList extends model.Model {

    /**
     * Canonical URI of a subscription resource
     */
    uri:string;

    /**
     * List of subscriptions for the current user and application
     */
    records:subscriptioninfo.SubscriptionInfo[];

    getPropertyMappings():model.ModelPropertyMapping[] {

        return [
            {property: 'uri', Class: null /* string */, isArray: false,isRequired: true},
            {property: 'records', Class: subscriptioninfo.SubscriptionInfo, isArray: true,isRequired: true}
        ];

    }

    getClassName() {
        return 'SubscriptionList';
    }

    // CUSTOM METHODS
    // CUSTOM METHODS

}