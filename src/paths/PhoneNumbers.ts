// This is Generated Source.
import AddBlockedAllowedPhoneNumber from "../definitions/AddBlockedAllowedPhoneNumber";
import BlockedAllowedPhoneNumberInfo from "../definitions/BlockedAllowedPhoneNumberInfo";
import BlockedAllowedPhoneNumbersList from "../definitions/BlockedAllowedPhoneNumbersList";
import PathSegment from "../PathSegment";

export default class PhoneNumbers extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("phone-numbers", id, prv, service);
    }

    /**
     *  Returns the lists of blocked and allowed phone numbers.
     */
    list(query?: ListQuery): Promise<BlockedAllowedPhoneNumbersList> {
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
     *  Returns the lists of blocked and allowed phone numbers.
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
     *  Updates either blocked or allowed phone number list with a new phone number.
     */
    post(body: AddBlockedAllowedPhoneNumber): Promise<BlockedAllowedPhoneNumberInfo> {
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
     *  Updates either blocked or allowed phone number list with a new phone number.
     *  return {ApiResponse}
     */
    postRaw(body: AddBlockedAllowedPhoneNumber): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Returns blocked or allowed phone number(s) by their ID(s). Batch request is supported.
     */
    get(): Promise<BlockedAllowedPhoneNumberInfo> {
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
     *  Returns blocked or allowed phone number(s) by their ID(s). Batch request is supported.
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
     *  Deletes blocked or allowed phone number(s) by their ID(s). Batch request is supported.
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
     *  Deletes blocked or allowed phone number(s) by their ID(s). Batch request is supported.
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

    /**
     *  Updates blocked or allowed phone number(s) by their ID(s). Batch request is supported.
     */
    put(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  Updates blocked or allowed phone number(s) by their ID(s). Batch request is supported.
     *  return {ApiResponse}
     */
    putRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * 
     */
    page?: number;

    /**
     * 
     */
    perPage?: number;

    /**
     * 
     */
    status?: "Blocked" | "Allowed";
}
