// This is Generated Source.
import ICallQueues from "../definitions/CallQueues";
import PathSegment from "../PathSegment";
import Members from "./Members";
import BulkAssign from "./BulkAssign";

export default class CallQueues extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("call-queues", id, prv, service);
    }

    /**
     * 
     */
    members(id?: string) {
        return new Members(this, id);
    }

    /**
     * 
     */
    bulkAssign(id?: string) {
        return new BulkAssign(this, id);
    }

    /**
     *  <p>Returns call queue group list</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    list(query?: ListQuery): Promise<ICallQueues> {
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
     *  <p>Returns call queue group list</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadExtensions</p><h4>Usage Plan Group</h4><p>Medium</p>
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

    /**
     * Internal identifier of an extension that is a member of every group within the result
     */
    memberExtensionId?: string;
}
