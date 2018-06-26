// Generated Source
import ApsInfo from "./ApsInfo";

interface IncomingCallEvent {

    /**
     * Apple Push Notification Service Info
     */
    aps?: ApsInfo;

    /**
     * Event filter URI
     */
    event?: string;

    /**
     * Universally unique identifier of a notification
     */
    uuid?: string;

    /**
     * Internal identifier of a subscription
     */
    subscriptionId?: string;

    /**
     * The datetime of a call action in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    timestamp?: string;

    /**
     * Internal identifier of an extension
     */
    extensionId?: string;

    /**
     * Calling action, for example 'StartRing'
     */
    action?: string;

    /**
     * Identifier of a call session
     */
    sessionId?: string;

    /**
     * Identifier of a server
     */
    serverId?: string;

    /**
     * Phone number of a caller
     */
    from?: string;

    /**
     * Caller name
     */
    fromName?: string;

    /**
     * Phone number of a callee
     */
    to?: string;

    /**
     * Callee name
     */
    toName?: string;

    /**
     * Unique identifier of a session
     */
    sid?: string;

    /**
     * SIP proxy registration name
     */
    toUrl?: string;

    /**
     * User data
     */
    srvLvl?: string;

    /**
     * User data
     */
    srvLvlExt?: string;

    /**
     * File containing recorded caller name
     */
    recUrl?: string;

    /**
     * Notification lifetime value in seconds, the default value is 30 seconds
     */
    pn_ttl?: number;
}

export default IncomingCallEvent;
