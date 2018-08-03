// This is Generated Source.
import CreateForwardingNumberRequest from "../definitions/CreateForwardingNumberRequest";
import ForwardingNumberInfo from "../definitions/ForwardingNumberInfo";
import ForwardingNumberResource from "../definitions/ForwardingNumberResource";
import GetExtensionForwardingNumberListResponse from "../definitions/GetExtensionForwardingNumberListResponse";
import UpdateForwardingNumberRequest from "../definitions/UpdateForwardingNumberRequest";
import PathSegment from "../PathSegment";

export default class ForwardingNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("forwarding-number", id, prv, service);
    }

    /**
     *  Returns the list of extension phone numbers used for call forwarding and call flip. The returned list contains all the extension phone numbers used for call forwarding and call flip.
     */
    list(query?: ListQuery): Promise<GetExtensionForwardingNumberListResponse> {
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
     *  Returns the list of extension phone numbers used for call forwarding and call flip. The returned list contains all the extension phone numbers used for call forwarding and call flip.
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
     *  Adds a new forwarding number to the forwarding number list.
     */
    post(body: CreateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Adds a new forwarding number to the forwarding number list.
     *  return {ApiResponse}
     */
    postRaw(body: CreateForwardingNumberRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Returns a specific forwarding number.
     */
    get(): Promise<ForwardingNumberResource> {
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
     *  Returns a specific forwarding number.
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
     *  Updates the existing forwarding number from the forwarding number list.
     */
    put(body: UpdateForwardingNumberRequest): Promise<ForwardingNumberInfo> {
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
     *  Updates the existing forwarding number from the forwarding number list.
     *  return {ApiResponse}
     */
    putRaw(body: UpdateForwardingNumberRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  Deletes a forwarding number from the forwarding number list by its ID.
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  Deletes a forwarding number from the forwarding number list by its ID.
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted.
     */
    page?: number;

    /**
     * Indicates the page size (number of items).
     */
    perPage?: number;
}
