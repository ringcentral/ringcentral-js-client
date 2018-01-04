// Generated Source
import NotificationDeliveryModeRequest from "./NotificationDeliveryModeRequest";

interface CreateSubscriptionRequest {

    /**
     * Mandatory. Collection of URIs to API resources (see Event Types for details). For APNS transport type only message event filter is available
     */
    eventFilters?: string[];

    /**
     * Notification delivery settings
     */
    deliveryMode?: NotificationDeliveryModeRequest;

    /**
     * Subscription lifetime in seconds. Max value is 7 days (604800 sec)
     */
    expiresIn?: number;
}

export default CreateSubscriptionRequest;
