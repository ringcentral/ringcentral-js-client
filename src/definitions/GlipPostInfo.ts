// Generated Source
import GlipAttachmentInfo from "./GlipAttachmentInfo";

interface GlipPostInfo {

    /**
     * Internal identifier of a post
     */
    id?: string;

    /**
     * Internal identifier of a group a post belongs to
     */
    groupId?: string;

    /**
     * Type of a post
     */
    type?: "TextMessage" | "PersonJoined" | "PersonsAdded";

    /**
     * For 'TextMessage' post type only. Message text
     */
    text?: string;

    /**
     * List of posted attachments
     */
    attachments?: GlipAttachmentInfo[];

    /**
     * Internal identifier of a user - author of a post
     */
    creatorId?: string;

    /**
     * For PersonsAdded post type only. Identifiers of persons added to a group
     */
    addedPersonIds?: string[];

    /**
     * Post creation datetime in ISO 8601 format
     */
    creationTime?: string;

    /**
     * Post last modification datetime in ISO 8601 format
     */
    lastModifiedTime?: string;
}

export default GlipPostInfo;
