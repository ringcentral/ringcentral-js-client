// This is Generated Source.
import UrlSection from "../../UrlSection";
import {ConferencingInfo} from "../ConferencingInfo";
import {ConferencingRequestPhoneNumber} from "../ConferencingRequestPhoneNumber";

export default class Conferencing extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("conferencing", id , prv, service);
    }

    /**
        Get Conferencing info
    */
    get(query?:GetQuery): Promise<ConferencingInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: query, body: null }).then(function (res) {
            return res.json();
        });
    }

    /**
        Update Conferencing info
    */
    put(body: PutBody): Promise<ConferencingInfo> {
        return this.getService().send({method: "put", url: this.getEndpoint(true), query: null, body: body }).then(function (res) {
            return res.json();
        });
    }
}

export interface GetQuery {

    /**
     * Internal identifier of a country. If not specified, the response is returned for the brand country
     */
    countryId?: string;
}

export interface PutBody {

    /**
     * Multiple dial-in phone numbers to connect to audio conference service, relevant for user's brand. Each number is given with the country and location information, in order to let the user choose the less expensive way to connect to a conference. The first number in the list is the primary conference number, that is default and domestic
     */
    phoneNumbers?: ConferencingRequestPhoneNumber[];

    /**
     * Determines if host user allows conference participants to join before the host
     */
    allowJoinBeforeHost?: boolean;
}
