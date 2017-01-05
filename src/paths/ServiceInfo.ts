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
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Meeting Service Info
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}
