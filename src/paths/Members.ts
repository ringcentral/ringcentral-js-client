// This is Generated Source.
import CallQueueMembers from "../definitions/CallQueueMembers";
import PathSegment from "../PathSegment";

export default class Members extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("members", id, prv, service);
    }

    /**
     *  Returns call queue group members.
     */
    list(query?: ListQuery): Promise<CallQueueMembers> {
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
     *  Returns call queue group members.
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
     * Indicates the page number to retrieve. Only positive number values are allowed
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;
}
