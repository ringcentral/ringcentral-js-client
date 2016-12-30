// This is Generated Source.
import ForwardingNumberInfo from "../definitions/ForwardingNumberInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class ForwardingNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("forwarding-number", id, prv, service);
    }

    /**
     *  Add New Forwarding Number
     */
    post(body: PostBody): Promise<ForwardingNumberInfo> {
        return this._send("post", true, body, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Forwarding Numbers
     */
    list(query?: ListQuery): Promise<PagingResult<ForwardingNumberInfo>> {
        return this._send("get", false, undefined, query).then((res) => {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Forwarding/Call flip phone number
     */
    phoneNumber?: string;

    /**
     * Forwarding/Call flip number title
     */
    label?: string;
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
