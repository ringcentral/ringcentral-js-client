// This is Generated Source.
import PathSegment from "../PathSegment";
import Members from "./Members";

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
