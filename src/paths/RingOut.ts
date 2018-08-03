// This is Generated Source.
import GetRingOutStatusResponse from "../definitions/GetRingOutStatusResponse";
import MakeRingOutRequest from "../definitions/MakeRingOutRequest";
import PathSegment from "../PathSegment";

export default class RingOut extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("ring-out", id, prv, service);
    }

    /**
     *  Makes a 2-leg RingOut call.
     */
    post(body: MakeRingOutRequest): Promise<GetRingOutStatusResponse> {
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
     *  Makes a 2-leg RingOut call.
     *  return {ApiResponse}
     */
    postRaw(body: MakeRingOutRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Returns the status of a 2-leg RingOut call.
     */
    get(): Promise<GetRingOutStatusResponse> {
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
     *  Returns the status of a 2-leg RingOut call.
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
     *  Cancels a 2-leg RingOut call.
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
     *  Cancels a 2-leg RingOut call.
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
