// This is Generated Source.
import PathSegment from "../PathSegment";
import SipProvision from "./SipProvision";

export default class ClientInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("client-info", id, prv, service);
    }

    /**
     * 
     */
    sipProvision(id?: string) {
        return new SipProvision(this, id);
    }
}
