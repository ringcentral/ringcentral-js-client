// This is Generated Source.
import UrlSection from "../../UrlSection";
import {DeviceInfo} from "../DeviceInfo";

export default class Order extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("order", id , prv, service);
    }

    /**
        Create New Order
    */
    post(body: PostBody): Promise<PostResponse> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Order by ID
    */
    get(): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
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
