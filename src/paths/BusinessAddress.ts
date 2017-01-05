// This is Generated Source.
import BusinessAddressInfo from "../definitions/BusinessAddressInfo";
import PathSegment from "../PathSegment";

export default class BusinessAddress extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-address", id, prv, service);
    }

    /**
     *  Get Company Business Address
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
     *  Get Company Business Address
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

    /**
     *  Update Company Business Address
     */
    put(body: PutBody): Promise<PutResponse> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Update Company Business Address
     *  return {ApiResponse}
     */
    putRaw(body: PutBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface GetResponse {

    /**
     * Canonical URI of the business address resource
     */
    uri?: string;

    /**
     * Company business name
     */
    company?: string;

    /**
     * Company business email address
     */
    email?: string;

    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}

export interface PutBody {

    /**
     * Company business name
     */
    company?: string;

    /**
     * Company business email address
     */
    email?: string;

    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}

export interface PutResponse {

    /**
     * Canonical URI of the business address resource
     */
    uri?: string;

    /**
     * Company business name
     */
    company?: string;

    /**
     * Company business email address
     */
    email?: string;

    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}
