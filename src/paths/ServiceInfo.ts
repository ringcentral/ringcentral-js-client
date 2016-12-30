// This is Generated Source.
import MeetingServiceInfo from "../definitions/MeetingServiceInfo";
import PathSegment from "../PathSegment";

export default class ServiceInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("service-info", id, prv, service);
    }

    /**
     *  Get Meeting Service Info
     */
    get(): Promise<MeetingServiceInfo> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}
