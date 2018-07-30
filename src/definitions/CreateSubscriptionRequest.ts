// Generated Source
import NotificationDeliveryModeRequest from "./NotificationDeliveryModeRequest";

interface CreateSubscriptionRequest {

    /**
     * Collection of URIs to API resources. For APNS transport type only message event filter is available
     */
    eventFilters?: string[];

    /**
     * Notification delivery settings
     */
    deliveryMode?: NotificationDeliveryModeRequest;

    /**
     * Subscription lifetime in seconds. Max value is 7 days (604800 sec). For *WebHook* transport type max value might be set up to 630720000 seconds (20 years)
     */
    expiresIn?: number;
}

export default CreateSubscriptionRequest;
