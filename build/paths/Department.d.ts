import PathSegment from "../PathSegment";
import Members from "./Members";
import BulkAssign from "./BulkAssign";
export default class Department extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    members(id?: string): Members;
    /**
     *
     */
    bulkAssign(id?: string): BulkAssign;
}
