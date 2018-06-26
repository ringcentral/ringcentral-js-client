// Generated Source
import GlipMentionsInfo from "./GlipMentionsInfo";
import GlipMessageAttachmentInfo from "./GlipMessageAttachmentInfo";

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

    /**
     * List of posted attachments
     */
    attachments?: GlipMessageAttachmentInfo[];

    /**
     * List of posted attachments
     */
    mentions?: GlipMentionsInfo[];

    /**
     * activity type
     */
    activity?: string;

    /**
     * Title of the message. Can be set for bot messages only
     */
    title?: string;

    /**
     * URI to an image to use as the icon for this message.
     */
    iconUri?: string;

    /**
     * Emoji to use as the icon for a message
     */
    iconEmoji?: string;
}

export default GlipPostInfo;
