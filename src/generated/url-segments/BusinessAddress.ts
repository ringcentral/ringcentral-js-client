// This is Generated Source.
import UrlSection from "../../UrlSection";
import {BusinessAddressInfo} from "../BusinessAddressInfo";

export default class BusinessAddress extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("business-address", id , prv, service);
    }

    /**
        Get Company Business Address
    */
    get(): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Update Company Business Address
    */
    put(body: PutBody): Promise<PutResponse> {
        return this.getService().send({method: "put", url: this.getEndpoint(true), query: null, body: body }).then(function (res) {
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
