// Generated Source
import ApsInfo from "./ApsInfo";
import GlipUnreadMessageCountInfo from "./GlipUnreadMessageCountInfo";

interface GlipApnsInfo {

    /**
     * Apple Push Notification Service Info
     */
    type?: ApsInfo;

    /**
     * Datetime of a call action in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    creationTime?: string;

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
     * Unread messages data
     */
    body?: GlipUnreadMessageCountInfo;
}

export default GlipApnsInfo;
