// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Content extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("content", id, prv, service);
    }

    /**
     *  Get Message Attachment
     */
    get(): Promise<any> {
        return this._send("get", true, undefined, undefined);
    }
}
