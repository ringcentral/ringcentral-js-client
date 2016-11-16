// This is Generated Source.
import UrlSection from "../../UrlSection";
import {TimezoneInfo} from "../TimezoneInfo";
import PagingResult from "../../PagingResult";

export default class Timezone extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("timezone", id , prv, service);
    }

    /**
        Get Time Zone List
    */
    list(query?:ListQuery): Promise<PagingResult<TimezoneInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Time Zone by ID
    */
    get(): Promise<TimezoneInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.json();
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: string;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: string;
}
