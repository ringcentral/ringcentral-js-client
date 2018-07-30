// This is Generated Source.
import CallQueueMembers from "../definitions/CallQueueMembers";
import PathSegment from "../PathSegment";

export default class Members extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("members", id, prv, service);
    }

    /**
     *  <p>Returns call queue group members.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns call queue group members.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Light</p>
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
