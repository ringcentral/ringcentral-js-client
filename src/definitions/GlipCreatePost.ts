// Generated Source
import GlipMessageAttachmentInfoRequest from "./GlipMessageAttachmentInfoRequest";

interface GlipCreatePost {

    /**
     * Text of a post, the maximum is 10000 unicode characters
     */
    text?: string;

    /**
     * List of attachments to be posted
     */
    attachments?: GlipMessageAttachmentInfoRequest[];
}

export default GlipCreatePost;
