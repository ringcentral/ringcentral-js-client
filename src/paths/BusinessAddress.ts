// This is Generated Source.
import PathSegment from "../PathSegment";
import BusinessAddressInfo from "../definitions/BusinessAddressInfo";

export default class BusinessAddress extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("business-address", id, prv, service);
    }

    /**
     *  Get Company Business Address
     */
    get(): Promise<GetResponse> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Update Company Business Address
     */
    put(body: PutBody): Promise<PutResponse> {
        return this.getService().send({
          body: body,
          method: "put",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetResponse {

    /**
     * Canonical URI of the business address resource
     */
    uri?: string;

    /**
     * Company business name
     */
    company?: string;

    /**
     * Company business email address
     */
    email?: string;

    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}

export interface PutBody {

    /**
     * Company business name
     */
    company?: string;

    /**
     * Company business email address
     */
    email?: string;

    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}

export interface PutResponse {

    /**
     * Canonical URI of the business address resource
     */
    uri?: string;

    /**
     * Company business name
     */
    company?: string;

    /**
     * Company business email address
     */
    email?: string;

    /**
     * Company business address
     */
    businessAddress?: BusinessAddressInfo;
}
