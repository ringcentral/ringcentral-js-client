// This is Generated Source.
import UrlSection from "../../UrlSection";
import {BusinessHourScheduleInfo} from "../BusinessHourScheduleInfo";

export default class BusinessHours extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("business-hours", id , prv, service);
    }

    /**
        Get User Hours Setting
    */
    get(): Promise<GetResponse> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: null, body: null }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetResponse {

    /**
     * Canonical URI of a business-hours resource
     */
    uri?: string;

    /**
     * Schedule when an answering rule is applied
     */
    schedule?: BusinessHourScheduleInfo;
}
