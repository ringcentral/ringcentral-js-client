// This is Generated Source.
import UrlSection from "../../UrlSection";
import {SubscriptionInfo} from "../SubscriptionInfo";
import {SubscriptionRequestDeliveryMode} from "../SubscriptionRequestDeliveryMode";

export default class Subscription extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("subscription", id , prv, service);
    }

    /**
        Create New Subscription
    */
    post(body: PostBody): Promise<SubscriptionInfo> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }

    /**
        Cancel Subscription by ID
    */
    delete(): Promise<void> {
        return this.getService().send({method: "delete", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    }

    /**
        Get Subscription by ID
    */
    get(): Promise<SubscriptionInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Update/Renew Subscription by ID
    */
    put(body: PutBody): Promise<SubscriptionInfo> {
        return this.getService().send({method: "put", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Mandatory. Collection of URIs to API resources (see Event Types for details). For APNS transport type only message event filter is available
     */
    eventFilters?: string[];

    /**
     * Notification delivery settings
     */
    deliveryMode?: SubscriptionRequestDeliveryMode;
}

export interface PutBody {

    /**
     * Collection of URIs to API resources (see Event Types). Mandatory field
     */
    eventFilters?: string[];
}
