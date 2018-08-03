// This is Generated Source.
import AccountDeviceUpdate from "../definitions/AccountDeviceUpdate";
import DeviceResource from "../definitions/DeviceResource";
import GetAccountDevicesResponse from "../definitions/GetAccountDevicesResponse";
import GetDeviceInfoResponse from "../definitions/GetDeviceInfoResponse";
import PathSegment from "../PathSegment";

export default class Device extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("device", id, prv, service);
    }

    /**
     *  Returns a list of company devices.
     */
    list(query?: ListQuery): Promise<GetAccountDevicesResponse> {
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
     *  Returns a list of company devices.
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
     *  Returns account device(s) by their ID(s).
     */
    get(): Promise<GetDeviceInfoResponse> {
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
     *  Returns account device(s) by their ID(s).
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
     *  Updates account device(s) by their ID(s).
     */
    put(body: AccountDeviceUpdate): Promise<DeviceResource> {
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
     *  Updates account device(s) by their ID(s).
     *  return {ApiResponse}
     */
    putRaw(body: AccountDeviceUpdate): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Device serial number
     */
    serial?: string;

    /**
     * Device feature or multiple features supported
     */
    feature?: "Intercom" | "Paging" | "BLA";
}
