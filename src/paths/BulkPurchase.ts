// This is Generated Source.
import OrderLicensesRequest from "../definitions/OrderLicensesRequest";
import PathSegment from "../PathSegment";

export default class BulkPurchase extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bulk-purchase", id, prv, service);
    }

    /**
     *  <p>Purchases licenses for add-on features: Rooms, Room Connector, Webinar, Live Reports, etc.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Heavy</p>
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
     *  <p>Purchases licenses for add-on features: Rooms, Room Connector, Webinar, Live Reports, etc.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Heavy</p>
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
