import GetLocationListResponse from "../definitions/GetLocationListResponse";
import PathSegment from "../PathSegment";
export default class Location extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the available locations for the certain state.</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    list(query?: ListQuery): Promise<GetLocationListResponse>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.10 (Release 6.2)</p><p>Returns all the available locations for the certain state.</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any>;
}
export interface ListQuery {
    /**
     * Sorts results by the specified property. The default value is 'City'
     */
    orderBy?: ("Npa" | "City")[];
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
