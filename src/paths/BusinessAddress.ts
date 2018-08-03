// This is Generated Source.
import AccountBusinessAddressResource from "../definitions/AccountBusinessAddressResource";
import GetAccountInfoResponse from "../definitions/GetAccountInfoResponse";
import ModifyAccountBusinessAddressRequest from "../definitions/ModifyAccountBusinessAddressRequest";
import PathSegment from "../PathSegment";

export default class BusinessAddress extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-address", id, prv, service);
    }

    /**
     *  Returns business address of a company.
     */
    get(): Promise<GetAccountInfoResponse> {
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
     *  Returns business address of a company.
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
     *  Updates the business address of a company that account is linked to. Batch request is supported.
     */
    put(body: ModifyAccountBusinessAddressRequest): Promise<AccountBusinessAddressResource> {
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
     *  Updates the business address of a company that account is linked to. Batch request is supported.
     *  return {ApiResponse}
     */
    putRaw(body: ModifyAccountBusinessAddressRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
