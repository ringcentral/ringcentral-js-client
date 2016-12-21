// This is Generated Source.
import PathSegment from "../PathSegment";
import SubscriptionRequestDeliveryMode from "../definitions/SubscriptionRequestDeliveryMode";
import SubscriptionInfo from "../definitions/SubscriptionInfo";

export default class Subscription extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("subscription", id, prv, service);
    }

    /**
     *  Create New Subscription
     */
    post(body: PostBody): Promise<SubscriptionInfo> {
        return this.getService().send({
          body: body,
          method: "post",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Cancel Subscription by ID
     */
    delete(): Promise<void> {
        return this.getService().send({
          body: undefined,
          method: "delete",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.response();
        });
    }

    /**
     *  Get Subscription by ID
     */
    get(): Promise<SubscriptionInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Update/Renew Subscription by ID
     */
    put(body: PutBody): Promise<SubscriptionInfo> {
        return this.getService().send({
          body: body,
          method: "put",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
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
