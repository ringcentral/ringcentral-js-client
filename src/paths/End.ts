// This is Generated Source.
import PathSegment from "../PathSegment";

export default class End extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("end", id, prv, service);
    }

    /**
     *  End Current Meeting
     */
    post(): Promise<void> {
        return this._send("post", true, undefined, undefined).then((res) => {
            return res.response();
        });
    }
}
