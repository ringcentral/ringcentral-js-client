// This is Generated Source.
import PathSegment from "../PathSegment";
import Users from "./Users";
import BulkAssign from "./BulkAssign";

export default class ParkLocations extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("park-locations", id, prv, service);
    }

    /**
     * 
     */
    users(id?: string) {
        return new Users(this, id);
    }

    /**
     * 
     */
    bulkAssign(id?: string) {
        return new BulkAssign(this, id);
    }
}
