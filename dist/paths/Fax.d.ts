import Binary from "../Binary";
import CallerInfo from "../definitions/CallerInfo";
import MessageInfo from "../definitions/GetMessageInfoResponse";
import PathSegment from "../PathSegment";
import FaxBase from "./FaxBase";
export default class Fax extends FaxBase {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  Create and Send Fax Message
     */
    post(body: PostBody, attachments: Binary[]): Promise<MessageInfo>;
}
export interface PostBody {
    /**
     * Recipient information. Phone number property is mandatory. Optional for resend fax request
     */
    to?: CallerInfo[];
    /**
     * Fax resolution
     */
    faxResolution?: "High" | "Low";
    /**
     * The datetime to send fax at, in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. If time is not specified, the fax will be send immediately
     */
    sendTime?: string;
    /**
     * Optional. Cover page index. If not specified, the default cover page which is configured in "Outbound Fax Settings" is attached. See also 'Available Cover Pages' table below
     */
    coverIndex?: number;
    /**
     * Optional. Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
     */
    coverPageText?: string;
    /**
     * Internal identifier of the original fax message which needs to be resent. Mandatory for resend fax request
     */
    originalMessageId?: string;
}
