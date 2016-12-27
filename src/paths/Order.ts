// This is Generated Source.
import DeviceInfo from "../definitions/DeviceInfo";
import PathSegment from "../PathSegment";

export default class Order extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("order", id, prv, service);
    }

    /**
     *  Create New Order
     */
    post(body: PostBody): Promise<PostResponse> {
        return this.getService().send({
          body: body,
          method: "post",
          query: undefined,
          url: this.getEndpoint(true),
        }).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Order by ID
     */
    get(): Promise<GetResponse> {
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

export interface PostBody {

    /**
     * List of devices to order
     */
    devices?: DeviceInfo[];
}

export interface PostResponse {

    /**
     * List of the ordered devices
     */
    devices?: DeviceInfo[];
}

export interface GetResponse {

    /**
     * Identifier of a device
     */
    id?: string;

    /**
     * Canonical URI of an order resource
     */
    uri?: string;

    /**
     * List of the ordered devices
     */
    devices?: DeviceInfo[];
}
