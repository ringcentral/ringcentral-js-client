// This is Generated Source.
import AttachmentInfo from "../definitions/AttachmentInfo";
import PathSegment from "../PathSegment";

export default class CustomData extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("custom-data", id, prv, service);
    }

    /**
     *  Update Custom Data by Key
     */
    put(body: PutBody): Promise<PutResponse> {
        return this._send("put", true, body, undefined).then((res) => {
            return res.json();
        });
    }
}

export interface PutBody {

    /**
     * Custom data access key. Optional. If specified, must match the custom key in the URL
     */
    id?: string;

    /**
     * Description of custom data. Mandatory for create, if there is no attachment specified. Maximum length is limited to 256 symbols
     */
    value?: string;
}

export interface PutResponse {

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
    attachment?: AttachmentInfo;
}
