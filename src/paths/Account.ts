// This is Generated Source.
import AccountInfo from "../definitions/AccountInfo";
import PathSegment from "../PathSegment";
import ActiveCalls from "./ActiveCalls";
import BusinessAddress from "./BusinessAddress";
import CallLog from "./CallLog";
import Department from "./Department";
import Device from "./Device";
import DialingPlan from "./DialingPlan";
import Extension from "./Extension";
import Order from "./Order";
import PhoneNumber from "./PhoneNumber";
import Recording from "./Recording";
import ServiceInfo from "./ServiceInfo";

export default class Account extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("account", id || "~", prv, service);
    }

    /**
     * 
     */
    activeCalls(id?: string) {
        return new ActiveCalls(this, id);
    }

    /**
     * 
     */
    businessAddress(id?: string) {
        return new BusinessAddress(this, id);
    }

    /**
     * Internal identifier of a call log record
     */
    callLog(id?: string) {
        return new CallLog(this, id);
    }

    /**
     * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
     */
    department(id?: string) {
        return new Department(this, id);
    }

    /**
     * Internal identifier of a device
     */
    device(id?: string) {
        return new Device(this, id);
    }

    /**
     * 
     */
    dialingPlan(id?: string) {
        return new DialingPlan(this, id);
    }

    /**
     * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
     */
    extension(id?: string) {
        return new Extension(this, id);
    }

    /**
     * Internal identifier of an order
     */
    order(id?: string) {
        return new Order(this, id);
    }

    /**
     * Internal identifier of a phone number
     */
    phoneNumber(id?: string) {
        return new PhoneNumber(this, id);
    }

    /**
     * Internal identifier of recording (returned in Call Log)
     */
    recording(id?: string) {
        return new Recording(this, id);
    }

    /**
     * 
     */
    serviceInfo(id?: string) {
        return new ServiceInfo(this, id);
    }

    /**
     *  Get Account Info by ID
     */
    get(): Promise<AccountInfo> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}
