// This is Generated Source.
import PathSegment from "../PathSegment";
import ReservePhoneNumberRequestReserveRecord from "../definitions/ReservePhoneNumberRequestReserveRecord";
import ReservePhoneNumberResponseReserveRecord from "../definitions/ReservePhoneNumberResponseReserveRecord";

export default class Reserve extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("reserve", id , prv, service);
    }

    /**
        Reserve Phone Number
    */
    post(body: PostBody): Promise<PostResponse> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Phone numbers to be reserved/un-reserved
     */
    records?: ReservePhoneNumberRequestReserveRecord[];
}

export interface PostResponse {

    /**
     * Phone numbers to be reserved/un-reserved
     */
    records?: ReservePhoneNumberResponseReserveRecord[];
}
