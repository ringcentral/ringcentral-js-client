/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import {ReservePhoneNumberRequestReserveRecord} from "../ReservePhoneNumberRequestReserveRecord";
import {ReservePhoneNumberResponseReserveRecord} from "../ReservePhoneNumberResponseReserveRecord";

export default class Reserve extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("reserve", id , prv, service);
    }

    /**
        Reserve Phone Number
    */
    post(body: PostBody): Promise<PostResponse> {
        return this.getService().send({method: "post", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
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
