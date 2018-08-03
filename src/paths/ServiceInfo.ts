// This is Generated Source.
import MeetingServiceInfoResource from "../definitions/MeetingServiceInfoResource";
import PathSegment from "../PathSegment";

export default class ServiceInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("service-info", id, prv, service);
    }

    /**
     *  Returns information on dial-in numbers for meetings, support and international dial-in numbers URIs and meeting account information.
     */
    get(): Promise<MeetingServiceInfoResource> {
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
     *  Returns information on dial-in numbers for meetings, support and international dial-in numbers URIs and meeting account information.
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
