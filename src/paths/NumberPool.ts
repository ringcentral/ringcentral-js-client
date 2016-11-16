// This is Generated Source.
import PathSegment from "../PathSegment";
import Lookup from "./Lookup";
import Reserve from "./Reserve";

export default class NumberPool extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("number-pool", id , prv, service);
    }

    /**
     * 
     */
    lookup(id?: string) {
        return new Lookup(this, id);
    }

    /**
     * 
     */
    reserve(id?: string) {
        return new Reserve(this, id);
    }
}
