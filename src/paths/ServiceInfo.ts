// This is Generated Source.
import PathSegment from "../PathSegment";
import MeetingServiceInfo from "../definitions/MeetingServiceInfo";

export default class ServiceInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("service-info", id , prv, service);
    }

    /**
        Get Meeting Service Info
    */
    get(): Promise<MeetingServiceInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}
