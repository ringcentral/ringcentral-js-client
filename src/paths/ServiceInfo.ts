// This is Generated Source.
import PathSegment from "../PathSegment";
import MeetingServiceInfo from "../definitions/MeetingServiceInfo";

export default class ServiceInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("service-info", id, prv, service);
    }

    /**
     *  Get Meeting Service Info
     */
    get(): Promise<MeetingServiceInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }
}
