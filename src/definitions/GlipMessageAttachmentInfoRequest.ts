// Generated Source
import GlipMessageAttachmentAuthorInfo from "./GlipMessageAttachmentAuthorInfo";
import GlipMessageAttachmentFieldsInfo from "./GlipMessageAttachmentFieldsInfo";
import GlipMessageAttachmentFootnoteInfo from "./GlipMessageAttachmentFootnoteInfo";

interface GlipMessageAttachmentInfoRequest {

    /**
     * Type of an attachment
     */
    type?: string;

    /**
     * A string of default text that will be rendered in the case that the client does not support Interactive Messages
     */
    fallback?: string;

    /**
     * A Hex color code that determines the color of the side border of the Interactive Message
     */
    color?: string;

    /**
     * A pretext to the message
     */
    intro?: string;

    /**
     * Information about the author
     */
    author?: GlipMessageAttachmentAuthorInfo;

    /**
     * Message title
     */
    title?: string;

    /**
     * A large string field (up to 1000 chars) to be displayed as the body of a message (Supports GlipDown)
     */
    text?: string;

    /**
     * url used to display a single image at the bottom of a message
     */
    imageUri?: string;

    /**
     * url used to display a thumbnail to the right of a message (82x82)
     */
    thumbnailUri?: string;

    /**
     * Information on navigation
     */
    fields?: GlipMessageAttachmentFieldsInfo[];

    /**
     * Message Footer
     */
    footnote?: GlipMessageAttachmentFootnoteInfo;
}

export default GlipMessageAttachmentInfoRequest;
