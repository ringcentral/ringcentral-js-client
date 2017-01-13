// This is Generated Source.
import CallLogRecord from "../definitions/CallLogRecord";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class ActiveCalls extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("active-calls", id, prv, service);
    }

    /**
     *  Get Account Active (Recent) Calls
     */
    list(query?: ListQuery): Promise<PagingResult<CallLogRecord>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Account Active (Recent) Calls
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
     * The direction for the result records. It is allowed to specify more than one direction. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: "Voice" | "Fax";

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default.
     */
    perPage?: number;
}
