// Generated Source
import NotificationDeliveryMode from "./NotificationDeliveryMode";

interface SubscriptionInfo {

    /**
     * Internal identifier of a subscription
     */
    id?: string;

    /**
     * Canonical URI of a subscription
     */
    uri?: string;

    /**
     * Collection of URIs to API resources (message-store/presence/detailed presence)
     */
    eventFilters?: string[];

    /**
     * Subscription expiration datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    expirationTime?: string;

    /**
     * Subscription lifetime in seconds. The default value is 900
     */
    expiresIn?: number;

    /**
     * Subscription status
     */
    status?: "Active" | "Suspended";

    /**
     * Subscription creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    creationTime?: string;

    /**
     * Delivery mode data
     */
    deliveryMode?: NotificationDeliveryMode;
}

export default SubscriptionInfo;
