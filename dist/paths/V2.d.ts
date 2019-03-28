import PathSegment from "../PathSegment";
import ServiceProviderConfig from "./ServiceProviderConfig";
import Users from "./Users";
export default class V2 extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    serviceProviderConfig(id?: string): ServiceProviderConfig;
    /**
     * Internal identifier of a user
     */
    users(id?: string): Users;
}
