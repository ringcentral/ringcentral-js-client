import * as FormData from "form-data";
import Binary from "../Binary";
import CallerInfo from "../definitions/CallerInfo";
import MessageInfo from "../definitions/GetMessageInfoResponse";
import PathSegment from "../PathSegment";
import FaxBase from "./FaxBase";

export default class Fax extends FaxBase {
    constructor(prv: PathSegment, id?: string, service?) {
        super(prv, id, service);
    }

    /**
     *  Create and Send Fax Message
     */
    post(body: PostBody, attachments: Binary[]): Promise<MessageInfo> {
        const meta = JSON.stringify(body);
        const form = new FormData();
        const jsonType = "application/json";
        if (inNode()) {
            form.append("json", meta, { contentType: jsonType, filename: "request.json" });
            for (const atch of attachments) {
                if (typeof atch === "string") {
                    form.append("attachment", atch, { contentType: "text/plain" });
                } else {
                    form.append("attachment", atch);
                }
            }
        } else if (browserSupportBlob()) {
            form.append("json", new Blob([meta], { type: jsonType }));
            for (const atch of attachments) {
                if (typeof atch === "string") {
                    form.append("attachment", new Blob([atch], { type: "text/plain" }));
                } else {
                    form.append("attachment", atch);
                }
            }
        } else {
            return Promise.reject("Your're not in node and your environment does not support Blob or File API.");
        }
        return this.getService().post(this.getEndpoint(false), form).then((res) => res.json());
    }
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

function inNode(): boolean {
    return typeof process !== "undefined" && !process["browser"];
}

function browserSupportBlob(): boolean {
    return typeof Blob === "function";
}
