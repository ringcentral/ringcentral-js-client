// This is Generated Source.
import GrantInfo from "../definitions/GrantInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class Grant extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("grant", id, prv, service);
    }

    /**
     *  Get Extension Grants
     */
    list(query?: ListQuery): Promise<PagingResult<GrantInfo>> {
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
     *  Get Extension Grants
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
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
