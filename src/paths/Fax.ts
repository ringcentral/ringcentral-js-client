import FaxBase, { PostBody } from "./FaxBase";
import PathSegment from "../PathSegment";
import MessageInfo from "../definitions/MessageInfo";
import * as FormData from "form-data";
import Binary from "../Binary";

export default class Fax extends FaxBase {
    constructor(prv: PathSegment, id?: string, service?) {
        super(prv, id, service);
    }

    /**
     *  Create and Send Fax Message
     */
    post(body: PostBody, attachments: Binary[]): Promise<MessageInfo> {
        let meta = JSON.stringify(body);
        let form = new FormData();
        const jsonType = "application/json";
        if (inNode()) {
            form.append("json", meta, { contentType: jsonType, filename: "request.json" });
            for (let i = 0; i < attachments.length; i++) {
                let atch = attachments[i];
                if (typeof atch === "string") {
                    form.append("attachment", atch, { contentType: "text/plain" });
                } else {
                    form.append("attachment", atch);
                }
            }
        } else if (browserSupportBlob()) {
            form.append("json", new Blob([meta], { type: jsonType }));
            for (let i = 0; i < attachments.length; i++) {
                let atch = attachments[i];
                if (typeof atch === "string") {
                    form.append("attachment", new Blob([atch], { type: "text/plain" }));
                } else {
                    form.append("attachment", atch);
                }
            }
        } else {
            return Promise.reject("Your're not in node and your environment does not support Blob or File API.");
        }
        return this.getService().post(this.getEndpoint(false), form).then(res => res.json());
    }
}

export { PostBody };

function inNode(): boolean {
    return typeof process !== "undefined" && !process["browser"];
}

function browserSupportBlob(): boolean {
    return typeof Blob === "function";
}