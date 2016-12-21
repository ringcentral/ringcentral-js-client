// This is Generated Source.
import Members from "./Members";
import PathSegment from "../PathSegment";

export default class Department extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("department", id, prv, service);
    }

    /**
     * 
     */
    members(id?: string) {
        return new Members(this, id);
    }
}
