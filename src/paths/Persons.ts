// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Persons extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("persons", id, prv, service);
    }

    /**
     *  Get Person by ID
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
     *  Get Person by ID
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
     * Internal identifier of a user
     */
    id?: string;

    /**
     * First name of a user
     */
    firstName?: string;

    /**
     * Last name of a user
     */
    lastName?: string;

    /**
     * Email of a user
     */
    email?: string;

    /**
     * Photo of a user
     */
    avatar?: string;

    /**
     * Internal identifier of a company
     */
    companyId?: string;

    /**
     * Time of creation in ISO 8601 format
     */
    creationTime?: string;

    /**
     * Time of last modification in ISO 8601 format
     */
    lastModifiedTime?: string;
}
