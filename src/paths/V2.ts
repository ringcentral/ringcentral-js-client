// This is Generated Source.
import PathSegment from "../PathSegment";
import ServiceProviderConfig from "./ServiceProviderConfig";
import Users from "./Users";

export default class V2 extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("v2", id, prv, service);
    }

    /**
     * 
     */
    serviceProviderConfig(id?: string) {
        return new ServiceProviderConfig(this, id);
    }

    /**
     * Internal identifier of a user
     */
    users(id?: string) {
        return new Users(this, id);
    }
}
