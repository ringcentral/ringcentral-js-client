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
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}
