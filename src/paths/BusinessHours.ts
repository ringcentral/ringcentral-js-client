// This is Generated Source.
import PathSegment from "../PathSegment";
import BusinessHourScheduleInfo from "../definitions/BusinessHourScheduleInfo";

export default class BusinessHours extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-hours", id, prv, service);
    }

    /**
     *  Get User Hours Setting
     */
    get(): Promise<GetResponse> {
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

export interface GetResponse {

    /**
     * Canonical URI of a business-hours resource
     */
    uri?: string;

    /**
     * Schedule when an answering rule is applied
     */
    schedule?: BusinessHourScheduleInfo;
}
