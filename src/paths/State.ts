// This is Generated Source.
import GetStateInfoResponse from "../definitions/GetStateInfoResponse";
import GetStateListResponse from "../definitions/GetStateListResponse";
import PathSegment from "../PathSegment";

export default class State extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("state", id, prv, service);
    }

    /**
     *  Returns all the states of a certain country
     */
    list(query?: ListQuery): Promise<GetStateListResponse> {
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
     *  Returns all the states of a certain country
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
     *  Returns the information on a specific state.
     */
    get(): Promise<GetStateInfoResponse> {
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
     *  Returns the information on a specific state.
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
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * If 'True', the list of states with phone numbers available for buying is returned
     */
    withPhoneNumbers?: boolean;
}
