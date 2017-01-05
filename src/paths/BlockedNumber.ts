// This is Generated Source.
import BlockedNumberInfo from "../definitions/BlockedNumberInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class BlockedNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("blocked-number", id, prv, service);
    }

    /**
     *  Add New Blocked Number
     */
    post(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
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
     *  Add New Blocked Number
     *  return {ApiResponse}
     */
    postRaw(body: BlockedNumberInfo): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Get Blocked Number List
     */
    list(): Promise<PagingResult<BlockedNumberInfo>> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get Blocked Number List
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  Delete Blocked Number by ID
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
     *  Delete Blocked Number by ID
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
     *  Get Blocked Number by ID
     */
    get(): Promise<BlockedNumberInfo> {
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
     *  Get Blocked Number by ID
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
     *  Update Blocked Number Label
     */
    put(body: BlockedNumberInfo): Promise<BlockedNumberInfo> {
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
     *  Update Blocked Number Label
     *  return {ApiResponse}
     */
    putRaw(body: BlockedNumberInfo): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}
