// This is Generated Source.
import SubscriptionInfo from "../definitions/SubscriptionInfo";
import PathSegment from "../PathSegment";

export default class Renew extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("renew", id, prv, service);
    }

    /**
     *  Renews an existent subscription by ID by posting request with an empty body.
     */
    post(): Promise<SubscriptionInfo> {
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
     *  Renews an existent subscription by ID by posting request with an empty body.
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
