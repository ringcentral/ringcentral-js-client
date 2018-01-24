// Generated Source
import CustomDataAttachmentInfo from "./CustomDataAttachmentInfo";

interface CustomDataApiResponse {

    /**
     * Custom data access key
     */
    id?: string;

    /**
     * Link to the custom data
     */
    uri?: string;

    /**
     * Description of custom data
     */
    value?: string;

    /**
     * Time of the last change in custom data
     */
    lastModifiedTime?: string;

    /**
     * Attachment data: link and type
     */
    attachment?: CustomDataAttachmentInfo;
}

export default CustomDataApiResponse;
