// This is Generated Source.
import GetLocationListResponse from "../definitions/GetLocationListResponse";
import PathSegment from "../PathSegment";

export default class Location extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("location", id, prv, service);
    }

    /**
     *  Returns all available locations for a certain state.
     */
    list(query?: ListQuery): Promise<GetLocationListResponse> {
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
     *  Returns all available locations for a certain state.
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
     * Sorts results by the property specified
     */
    orderBy?: ("Npa" | "City")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * Internal identifier of a state
     */
    stateId?: string;

    /**
     * Specifies if nxx codes are returned
     */
    withNxx?: boolean;
}
