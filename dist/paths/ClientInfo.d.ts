import PathSegment from "../PathSegment";
import SipProvision from "./SipProvision";
import CustomData from "./CustomData";
export default class ClientInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    sipProvision(id?: string): SipProvision;
    /**
     *
     */
    customData(id?: string): CustomData;
}
