// This is Generated Source.
import PathSegment from "../PathSegment";
import Parse from "./Parse";

export default class NumberParser extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("number-parser", id, prv, service);
    }

    /**
     * 
     */
    parse(id?: string) {
        return new Parse(this, id);
    }
}
