/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import {ForwardingNumberInfo} from "../ForwardingNumberInfo";
import PagingResult from "../../PagingResult";

export default class ForwardingNumber extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("forwarding-number", id , prv, service);
    }

    /**
        Add New Forwarding Number
    */
    post(body: PostBody): Promise<ForwardingNumberInfo> {
        return this.getService().send({method: "post", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Forwarding Numbers
    */
    list(query?:ListQuery): Promise<PagingResult<ForwardingNumberInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
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
