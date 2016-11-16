// This is Generated Source.
import PathSegment from "../PathSegment";
import ForwardingNumberInfo from "../definitions/ForwardingNumberInfo";
import PagingResult from "../PagingResult";

export default class ForwardingNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("forwarding-number", id , prv, service);
    }

    /**
        Add New Forwarding Number
    */
    post(body: PostBody): Promise<ForwardingNumberInfo> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Forwarding Numbers
    */
    list(query?:ListQuery): Promise<PagingResult<ForwardingNumberInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
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
