// This is Generated Source.
import PresenceInfo from "../definitions/PresenceInfo";
import PathSegment from "../PathSegment";

export default class Presence extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("presence", id, prv, service);
    }

    /**
     *  Get Extension Presence
     */
    get(): Promise<PresenceInfo> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Extension Presence
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}
