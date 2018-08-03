// This is Generated Source.
import GetCountryInfoDictionaryResponse from "../definitions/GetCountryInfoDictionaryResponse";
import GetCountryListResponse from "../definitions/GetCountryListResponse";
import PathSegment from "../PathSegment";

export default class Country extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("country", id, prv, service);
    }

    /**
     *  Returns all the countries available for calling.
     */
    list(query?: ListQuery): Promise<GetCountryListResponse> {
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
     *  Returns all the countries available for calling.
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
     *  Returns the information on a specific country.
     */
    get(): Promise<GetCountryInfoDictionaryResponse> {
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
     *  Returns the information on a specific country.
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
     * Specifies whether login with the phone numbers of this country is enabled or not
     */
    loginAllowed?: boolean;

    /**
     * Indicates whether signup/billing is allowed for a country. If not specified all countries are returned (according to other filters specified if any)
     */
    signupAllowed?: boolean;

    /**
     * Specifies if RingCentral sells phone numbers of this country
     */
    numberSelling?: boolean;

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * Specifies if free phone line for softphone is available for a country or not
     */
    freeSoftphoneLine?: boolean;
}
