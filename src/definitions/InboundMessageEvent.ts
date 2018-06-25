// Generated Source
import NotificationInfo from "./NotificationInfo";

interface InboundMessageEvent {

    /**
     * Information on a notification
     */
    aps?: NotificationInfo;

    /**
     * Internal identifier of an message
     */
    messageId?: string;

    /**
     * Internal identifier of an conversation
     */
    conversationId?: string;

    /**
     * Sender phone number
     */
    from?: string;

    /**
     * Receiver phone number
     */
    to?: string;
}

export default InboundMessageEvent;
