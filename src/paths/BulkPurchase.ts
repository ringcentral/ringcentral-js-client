// This is Generated Source.
import OrderLicensesRequest from "../definitions/OrderLicensesRequest";
import PathSegment from "../PathSegment";

export default class BulkPurchase extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bulk-purchase", id, prv, service);
    }

    /**
     *  Purchases licenses for add-on features: Rooms, Room Connector, Webinar, Live Reports, etc.
     */
    post(body: OrderLicensesRequest): Promise<void> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  Purchases licenses for add-on features: Rooms, Room Connector, Webinar, Live Reports, etc.
     *  return {ApiResponse}
     */
    postRaw(body: OrderLicensesRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
