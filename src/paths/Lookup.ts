// This is Generated Source.
import LookUpPhoneNumberPhoneNumberInfo from "../definitions/LookUpPhoneNumberPhoneNumberInfo";
import PathSegment from "../PathSegment";

export default class Lookup extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("lookup", id, prv, service);
    }

    /**
     *  Look up Phone Number
     */
    post(query?: PostQuery): Promise<PostResponse> {
        return this._send("post", true, undefined, query).then((res) => {
            return res.json();
        });
    }
}

export interface PostQuery {

    /**
     * Area code of the location
     */
    areaCode?: number;

    /**
     * Two-letter country code, complying with the ISO standard
     */
    countryCode?: string;

    /**
     * Internal identifier of a country; '1'- the US; '39' - Canada; '224' - the UK. The default value is '1'
     */
    countryId?: string;

    /**
     * A string of digits (one and more) that should not appear among the last four digits (line part) of the phone numbers that will be returned. It is possible to specify several exclude parameters. If specified, it is taken into account in all returned phone numbers both in the phone numbers satisfying to parameters of lookup and in alternative phone numbers (in case when extendedSearch is specified)
     */
    exclude?: string;

    /**
     * If the value is 'False', then the returned numbers exactly correspond to the specified NXX, NPA and LINE or countryCode, areaCode and numberPattern parameters. If the value is 'True', then the resulting numbers are ranked and returned with the rank attribute values (1-10). The default value is 'False'
     */
    extendedSearch?: boolean;

    /**
     * LINE pattern for vanity or wildcard search. Digits, Latin characters and asterisks are allowed (usually 4 characters)
     */
    line?: string;

    /**
     * Phone number pattern (for wildcard or vanity search). For NANP countries (US, Canada) is concatenation of nxx (the first three digits) and line. If the first three characters are specified as not digits (e.g. 5** or CAT) then parameter extendedSearch will be ignored.
     */
    numberPattern?: string;

    /**
     * NXX pattern for vanity or wildcard search. Digits, Latin characters and asterisks are allowed (usually 3 characters)
     */
    nxx?: string;

    /**
     * Area code (mandatory). For example, 800, 844, 855, 866, 877, 888 for North America; and 647 for Canada
     */
    npa?: string;

    /**
     * Payment type. Default is 'Local' (it should correlate with the npa provided)
     */
    paymentType?: "TollFree" | "Local";

    /**
     * Indicates the page size (number of items). If not specified, the value is '10' by default
     */
    perPage?: number;

    /**
     * Specifies if SMS activation is available for the number. If specified, it is taken into account in all returned phone numbers both in the phone numbers satisfying to parameters of lookup and in alternative phone numbers (in case when extendedSearch is specified). If not specified, the value is null.
     */
    smsEnabled?: boolean;
}

export interface PostResponse {

    /**
     * Canonical URI of the phone numbers resource
     */
    uri?: string;

    /**
     * List of phone numbers filtered by the specified criteria
     */
    records?: LookUpPhoneNumberPhoneNumberInfo[];
}
