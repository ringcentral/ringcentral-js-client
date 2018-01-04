// This is Generated Source.
import CreatePagerMessageRequest from "../definitions/CreatePagerMessageRequest";
import GetMessageInfoResponse from "../definitions/GetMessageInfoResponse";
import PathSegment from "../PathSegment";

export default class CompanyPager extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("company-pager", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends a pager message.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>InternalMessages</td><td>Sending and receiving intra-company text messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    post(body: CreatePagerMessageRequest): Promise<GetMessageInfoResponse> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.2</p><p>Creates and sends a pager message.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>InternalMessages</td><td>Sending and receiving intra-company text messages</td></tr><tr><td class='code'>ReadMessages</td><td>Viewing user messages</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: CreatePagerMessageRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
