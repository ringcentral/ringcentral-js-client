// This is Generated Source.
import GlipWebhookInfo from "../definitions/GlipWebhookInfo";
import PathSegment from "../PathSegment";

export default class Suspend extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("suspend", id, prv, service);
    }

    /**
     *  <p>Suspends webhooks by ID.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    post(): Promise<GlipWebhookInfo> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Suspends webhooks by ID.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
