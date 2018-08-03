// This is Generated Source.
import PathSegment from "../PathSegment";

export default class FaxCoverPage extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("fax-cover-page", id, prv, service);
    }

    /**
     *  Returns fax cover pages available for the current extension.
     */
    get(query?: GetQuery): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }

    /**
     *  Returns fax cover pages available for the current extension.
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }
}

export interface GetQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;
}
