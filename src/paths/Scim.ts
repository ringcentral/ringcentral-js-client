// This is Generated Source.
import PathSegment from "../PathSegment";
import V2 from "./V2";

export default class Scim extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("scim", id, prv, service);
    }

    /**
     * 
     */
    v2(id?: string) {
        return new V2(this, id);
    }
}
