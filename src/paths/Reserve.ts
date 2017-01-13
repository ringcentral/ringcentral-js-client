// This is Generated Source.
import ReservePhoneNumberRequestReserveRecord from "../definitions/ReservePhoneNumberRequestReserveRecord";
import ReservePhoneNumberResponseReserveRecord from "../definitions/ReservePhoneNumberResponseReserveRecord";
import PathSegment from "../PathSegment";

export default class Reserve extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("reserve", id, prv, service);
    }

    /**
     *  Reserve Phone Number
     */
    post(body: PostBody): Promise<PostResponse> {
        return this.postRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Reserve Phone Number
     *  return {ApiResponse}
     */
    postRaw(body: PostBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
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
