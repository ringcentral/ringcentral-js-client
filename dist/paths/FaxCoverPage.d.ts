import PathSegment from "../PathSegment";
export default class FaxCoverPage extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    get(query?: GetQuery): Promise<void>;
    /**
     *
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any>;
}
export interface GetQuery {
    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;
    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
