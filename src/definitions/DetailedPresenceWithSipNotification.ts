// Generated Source
import DetailedPresencewithSipEvent from "./DetailedPresencewithSipEvent";

interface DetailedPresenceWithSipNotification {

    /**
     * Universally unique identifier of a notification
     */
    uuid?: string;

    /**
     * Event filter URI
     */
    event?: string;

    /**
     * Internal identifier of a subscription
     */
    subscriptionId?: string;

    /**
     * The datetime of sending a notification in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    timestamp?: string;

    /**
     * Notification payload body
     */
    body?: DetailedPresencewithSipEvent;
}

export default DetailedPresenceWithSipNotification;
