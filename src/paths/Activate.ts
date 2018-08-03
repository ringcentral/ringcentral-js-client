// This is Generated Source.
import GlipWebhookInfo from "../definitions/GlipWebhookInfo";
import PathSegment from "../PathSegment";

export default class Activate extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("activate", id, prv, service);
    }

    /**
     *  Activates webhooks by ID.
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
     *  Activates webhooks by ID.
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
