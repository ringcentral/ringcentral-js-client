import PathSegment from "../PathSegment";
import Users from "./Users";
import BulkAssign from "./BulkAssign";
export default class ParkLocations extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    users(id?: string): Users;
    /**
     *
     */
    bulkAssign(id?: string): BulkAssign;
}
