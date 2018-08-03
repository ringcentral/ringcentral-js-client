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
     *  Returns call queue group list
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
     *  Returns call queue group list
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
