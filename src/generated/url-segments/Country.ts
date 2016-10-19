/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import {FullCountryInfo} from "../FullCountryInfo";
import PagingResult from "../../PagingResult";

export default class Country extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("country", id , prv, service);
    }

    /**
        Get Country List
    */
    list(query?:ListQuery): Promise<PagingResult<FullCountryInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Country by ID
    */
    get(): Promise<FullCountryInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }
}

export interface ListQuery {

    /**
     * Specifies whether login with the phone numbers of this country is enabled or not
     */
    loginAllowed?: boolean;

    /**
     * Specifies if RingCentral sells phone numbers of this country
     */
    numberSelling?: boolean;

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
