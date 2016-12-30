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
        return this._send("get", false, undefined, query).then((res) => {
            return res.json();
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
