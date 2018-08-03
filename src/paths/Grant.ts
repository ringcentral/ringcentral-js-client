// This is Generated Source.
import GetExtensionGrantListResponse from "../definitions/GetExtensionGrantListResponse";
import PathSegment from "../PathSegment";

export default class Grant extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("grant", id, prv, service);
    }

    /**
     *  Returns the list of extension grants.
     */
    list(query?: ListQuery): Promise<GetExtensionGrantListResponse> {
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
     *  Returns the list of extension grants.
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
     * 
     */
    page?: string;

    /**
     * 
     */
    perPage?: string;
}
