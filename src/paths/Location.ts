// This is Generated Source.
import LocationInfo from "../definitions/LocationInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class Location extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("location", id, prv, service);
    }

    /**
     *  Get Location List
     */
    list(query?: ListQuery): Promise<PagingResult<LocationInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Location List
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
     * Sorts results by the specified property. The default value is 'City'
     */
    orderBy?: "Npa" | "City";

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default.
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
