// This is Generated Source.
import ActiveCallsResponse from "../definitions/ActiveCallsResponse";
import PathSegment from "../PathSegment";

export default class ActiveCalls extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("active-calls", id, prv, service);
    }

    /**
     *  Returns records of all extension calls that are in progress, ordered by start time in descending order.
     */
    list(query?: ListQuery): Promise<ActiveCallsResponse> {
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
     *  Returns records of all extension calls that are in progress, ordered by start time in descending order.
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
     * The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: ("Inbound" | "Outbound")[];

    /**
     * 
     */
    view?: "Simple" | "Detailed";

    /**
     * Call type of a record. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: ("Voice" | "Fax")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;
}
