// Generated Source
import DisabledFilterInfo from "./DisabledFilterInfo";
import NotificationBlacklistedData from "./NotificationBlacklistedData";
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
     * Collection of API resources (message-store/presence/detailed presence) corresponding to events the user is subscribed to
     */
    eventFilters?: string[];

    /**
     * Collection of API resources (message-store/presence/detailed presence) corresponding to events the user is not subscribed to due to certain limitations
     */
    disabledFilters?: DisabledFilterInfo[];

    /**
     * Subscription expiration datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    expirationTime?: string;

    /**
     * Subscription lifetime in seconds
     */
    expiresIn?: number;

    /**
     * Subscription status
     */
    status?: "Active" | "Suspended" | "Blacklisted";

    /**
     * Subscription creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    creationTime?: string;

    /**
     * Delivery mode data
     */
    deliveryMode?: NotificationDeliveryMode;

    /**
     * 
     */
    blacklistedData?: NotificationBlacklistedData;
}

export default SubscriptionInfo;
