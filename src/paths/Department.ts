// This is Generated Source.
import PathSegment from "../PathSegment";
import Members from "./Members";
import BulkAssign from "./BulkAssign";

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

    /**
     * 
     */
    bulkAssign(id?: string) {
        return new BulkAssign(this, id);
    }
}
