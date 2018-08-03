// This is Generated Source.
import PagingOnlyGroupDevices from "../definitions/PagingOnlyGroupDevices";
import PathSegment from "../PathSegment";

export default class Devices extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("devices", id, prv, service);
    }

    /**
     *  Returns the list of paging devices assigned to this group.
     */
    list(query?: ListQuery): Promise<PagingOnlyGroupDevices> {
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
     *  Returns the list of paging devices assigned to this group.
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
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;
}
