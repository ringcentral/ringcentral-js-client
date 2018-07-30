// Generated Source
import NotificationDeliveryModeRequest from "./NotificationDeliveryModeRequest";

interface ModifySubscriptionRequest {

    /**
     * Collection of URIs to API resources
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

export default ModifySubscriptionRequest;
