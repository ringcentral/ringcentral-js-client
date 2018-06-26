// Generated Source
import CallerInfo from "./CallerInfo";
import ConversationResource from "./ConversationResource";
import MessageAttachmentInfo from "./MessageAttachmentInfo";

interface MessageInfoResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    to?: CallerInfo[];

    /**
     * 
     */
    from?: CallerInfo;

    /**
     * 
     */
    type?: "EMail" | "VoiceMail" | "Fax" | "Text" | "SMS" | "Pager" | "Unknown";

    /**
     * 
     */
    creationTime?: string;

    /**
     * 
     */
    readStatus?: "Read" | "Unread";

    /**
     * 
     */
    priority?: "Normal" | "High";

    /**
     * 
     */
    attachments?: MessageAttachmentInfo[];

    /**
     * 
     */
    direction?: "Inbound" | "Outbound";

    /**
     * 
     */
    availability?: "Alive" | "Deleted" | "Purged";

    /**
     * 
     */
    subject?: string;

    /**
     * 
     */
    messageStatus?: "Queued" | "Sent" | "Delivered" | "DeliveryFailed" | "SendingFailed" | "Received";

    /**
     * 
     */
    faxResolution?: "Undefined" | "High" | "Low";

    /**
     * 
     */
    faxPageCount?: number;

    /**
     * 
     */
    deliveryErrorCode?: string;

    /**
     * 
     */
    smsDeliveryTime?: string;

    /**
     * 
     */
    smsSendingAttemptsCount?: number;

    /**
     * 
     */
    conversationId?: number;

    /**
     * 
     */
    conversation?: ConversationResource;

    /**
     * 
     */
    lastModifiedTime?: string;

    /**
     * 
     */
    pgToDepartment?: boolean;

    /**
     * 
     */
    vmTranscriptionStatus?: "InProgress" | "CompletedPartially" | "Completed" | "TimedOut" | "Failed" | "NotAvailable" | "Unknown";

    /**
     * 
     */
    sourceFilePath?: string;

    /**
     * 
     */
    coverIndex?: number;

    /**
     * 
     */
    coverPageText?: string;
}

export default MessageInfoResource;
