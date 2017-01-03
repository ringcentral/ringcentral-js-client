// This is Generated Source.
import SubscriptionInfo from "../definitions/SubscriptionInfo";
import SubscriptionRequestDeliveryMode from "../definitions/SubscriptionRequestDeliveryMode";
import PathSegment from "../PathSegment";

export default class Subscription extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("subscription", id, prv, service);
    }

    /**
     *  Create New Subscription
     */
    post(body: PostBody): Promise<SubscriptionInfo> {
        return this._send("post", true, body, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Subscription List
     */
    get(): Promise<GetResponse> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Cancel Subscription by ID
     */
    delete(): Promise<void> {
        return this._send("delete", true, undefined, undefined);
    }

    /**
     *  Update/Renew Subscription by ID
     */
    put(body: PutBody): Promise<SubscriptionInfo> {
        return this._send("put", true, body, undefined).then((res) => {
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

export interface GetResponse {

    /**
     * Canonical URI of a subscription resource
     */
    uri?: string;

    /**
     * List of subscriptions for the current user and application
     */
    records?: SubscriptionInfo[];
}

export interface PutBody {

    /**
     * Collection of URIs to API resources (see Event Types). Mandatory field
     */
    eventFilters?: string[];
}
