// This is Generated Source.
import GetTimezoneInfoResponse from "../definitions/GetTimezoneInfoResponse";
import GetTimezoneListResponse from "../definitions/GetTimezoneListResponse";
import PathSegment from "../PathSegment";

export default class Timezone extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("timezone", id, prv, service);
    }

    /**
     *  Returns all available timezones.
     */
    list(query?: ListQuery): Promise<GetTimezoneListResponse> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns all available timezones.
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }

    /**
     *  Returns the information on a certain timezone.
     */
    get(query?: GetQuery): Promise<GetTimezoneInfoResponse> {
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
     *  Returns the information on a certain timezone.
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
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: string;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: string;
}

export interface GetQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: string;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: string;
}
