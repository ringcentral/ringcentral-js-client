// Generated Source
import GlipAttachmentInfoRequest from "./GlipAttachmentInfoRequest";

interface GlipCreatePost {

    /**
     * Internal identifier of a group to send post to
     */
    groupId?: string;

    /**
     * Text of a post, the maximum is 10000 characters
     */
    text?: string;

    /**
     * List of attachments to be posted
     */
    attachments?: GlipAttachmentInfoRequest[];
}

export default GlipCreatePost;
