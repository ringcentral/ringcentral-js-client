// This is Generated Source.
import BusinessHourScheduleInfo from "../definitions/BusinessHourScheduleInfo";
import PathSegment from "../PathSegment";

export default class BusinessHours extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-hours", id, prv, service);
    }

    /**
     *  Get User Hours Setting
     */
    get(): Promise<GetResponse> {
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
     *  Get User Hours Setting
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
