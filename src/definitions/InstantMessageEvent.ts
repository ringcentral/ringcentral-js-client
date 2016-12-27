// Generated Source
import InstantMessageAttachmentInfo from "./InstantMessageAttachmentInfo";
import InstantMessageEventCallerInfo from "./InstantMessageEventCallerInfo";

interface InstantMessageEvent {

    /**
     * Internal identifier of a message
     */
    id?: string;

    /**
     * Message receiver(s) information
     */
    to?: InstantMessageEventCallerInfo[];

    /**
     * Message sender information
     */
    from?: InstantMessageEventCallerInfo;

    /**
     * Type of a message. The default value is 'SMS'
     */
    type?: string;

    /**
     * Message creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    creationTime?: string;

    /**
     * The datetime when the message was modified in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    lastModifiedTime?: string;

    /**
     * Status of a message. The default value is 'Unread'
     */
    readStatus?: string;

    /**
     * The default value is 'Normal'
     */
    priority?: string;

    /**
     * Message attachment data
     */
    attachments?: InstantMessageAttachmentInfo[];

    /**
     * Message direction. The default value is 'Inbound'
     */
    direction?: string;

    /**
     * Message availability status. The default value is 'Alive'
     */
    availability?: string;

    /**
     * Message subject. It replicates message text which is also returned as an attachment
     */
    subject?: string;

    /**
     * Status of a message. The default value is 'Received'
     */
    messageStatus?: string;

    /**
     * Identifier of the conversation the message belongs to
     */
    conversationId?: string;
}

export default InstantMessageEvent;
