// This is Generated Source.
import PathSegment from "../PathSegment";
import Content from "./Content";

export default class CustomData extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("custom-data", id, prv, service);
    }

    /**
     * Internal identifier of a message attachment
     */
    content(id?: string) {
        return new Content(this, id);
    }
}
