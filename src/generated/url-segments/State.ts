// This is Generated Source.
import UrlSection from "../../UrlSection";
import {StateInfo} from "../StateInfo";
import PagingResult from "../../PagingResult";

export default class State extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("state", id , prv, service);
    }

    /**
        Get State/Province List
    */
    list(query?:ListQuery): Promise<PagingResult<StateInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get State/Province by ID
    */
    get(): Promise<StateInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }
}

export interface ListQuery {

    /**
     * Internal identifier of a country
     */
    countryId?: number;

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'.
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;

    /**
     * If 'True', the list of states with phone numbers available for buying is returned. The default value is 'False'
     */
    withPhoneNumbers?: boolean;
}
