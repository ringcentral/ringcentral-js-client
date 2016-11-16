// This is Generated Source.
import PathSegment from "../PathSegment";
import PresenceInfo from "../definitions/PresenceInfo";

export default class Presence extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("presence", id , prv, service);
    }

    /**
        Get Extension Presence
    */
    get(): Promise<PresenceInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}
