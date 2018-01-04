// This is Generated Source.
import PathSegment from "../PathSegment";
import Users from "./Users";

export default class V2 extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("v2", id, prv, service);
    }

    /**
     * Internal identifier of a user
     */
    users(id?: string) {
        return new Users(this, id);
    }
}
