import PathSegment from "../PathSegment";
import Users from "./Users";
import Devices from "./Devices";
import BulkAssign from "./BulkAssign";
export default class PagingOnlyGroups extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    users(id?: string): Users;
    /**
     *
     */
    devices(id?: string): Devices;
    /**
     *
     */
    bulkAssign(id?: string): BulkAssign;
}
