// This is Generated Source.
import GetConferencingInfoResponse from "../definitions/GetConferencingInfoResponse";
import UpdateConferencingInfoRequest from "../definitions/UpdateConferencingInfoRequest";
import PathSegment from "../PathSegment";

export default class Conferencing extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("conferencing", id, prv, service);
    }

    /**
     *  Returns the information on the Free Conference Calling (FCC) feature for a given extension.
     */
    get(query?: GetQuery): Promise<GetConferencingInfoResponse> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns the information on the Free Conference Calling (FCC) feature for a given extension.
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  Updates the default conferencing number for the current extension. The number can be selected from conferencing numbers of the current extension. Updates the setting, allowing participants join the conference before host.
     */
    put(body: UpdateConferencingInfoRequest): Promise<GetConferencingInfoResponse> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Updates the default conferencing number for the current extension. The number can be selected from conferencing numbers of the current extension. Updates the setting, allowing participants join the conference before host.
     *  return {ApiResponse}
     */
    putRaw(body: UpdateConferencingInfoRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface GetQuery {

    /**
     * Internal identifier of a country. If not specified, the response is returned for the brand country
     */
    countryId?: string;
}
