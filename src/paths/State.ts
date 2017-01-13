// This is Generated Source.
import StateInfo from "../definitions/StateInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class State extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("state", id, prv, service);
    }

    /**
     *  Get State/Province List
     */
    list(query?: ListQuery): Promise<PagingResult<StateInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get State/Province List
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

    /**
     *  Get State/Province by ID
     */
    get(): Promise<StateInfo> {
        return this.getRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get State/Province by ID
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

export interface ListQuery {

    /**
     * Internal identifier of a country
     */
    countryId?: number;

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;

    /**
     * If 'True', the list of states with phone numbers available for buying is returned. The default value is 'False'
     */
    withPhoneNumbers?: boolean;
}
