// This is Generated Source.
import DeviceInfo from "../definitions/DeviceInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class Device extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("device", id, prv, service);
    }

    /**
     *  Get Account Device List
     */
    list(): Promise<PagingResult<DeviceInfo>> {
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
     *  Get Device by ID
     */
    get(): Promise<DeviceInfo> {
    return this._send({
        body: undefined,
        ignoreId: true,
        method: "get",
        query: undefined,
    }).then((res) => {
            return res.json();
        });
    }
}
