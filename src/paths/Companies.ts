// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Companies extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("companies", id, prv, service);
    }

    /**
     *  Get Company by ID
     */
    get(): Promise<GetResponse> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Company by ID
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}

export interface GetResponse {

    /**
     * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
     */
    id?: string;

    /**
     * Name of a company
     */
    name?: string;

    /**
     * Domain name of a company
     */
    domain?: string;

    /**
     * Datetime of creation in ISO 8601 format
     */
    creationTime?: string;

    /**
     * Datetime of last modification in ISO 8601 format
     */
    lastModifiedTime?: string;
}
