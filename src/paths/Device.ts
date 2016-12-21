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
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(false),
        }).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Device by ID
     */
    get(): Promise<DeviceInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then((res) => {
            return res.json();
        });
    }
}
