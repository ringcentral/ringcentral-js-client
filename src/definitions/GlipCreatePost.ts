// Generated Source
import GlipMessageAttachmentInfoRequest from "./GlipMessageAttachmentInfoRequest";

interface GlipCreatePost {

    /**
     * Label of an activity type
     */
    activity?: string;

    /**
     * Title of a message. (Can be set for bot's messages only).
     */
    title?: string;

    /**
     * URI to an image to use as the icon for this message.
     */
    iconUri?: string;

    /**
     * Emoji to use as the icon for a message.
     */
    iconEmoji?: string;

    /**
     * Text of a post
     */
    text?: string;

    /**
     * List of attachments to be posted
     */
    attachments?: GlipMessageAttachmentInfoRequest[];
}

export default GlipCreatePost;
