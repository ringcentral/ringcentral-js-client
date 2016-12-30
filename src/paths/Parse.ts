// This is Generated Source.
import ParsePhoneNumberCountryInfo from "../definitions/ParsePhoneNumberCountryInfo";
import ParsePhoneNumberPhoneNumberInfo from "../definitions/ParsePhoneNumberPhoneNumberInfo";
import PathSegment from "../PathSegment";

export default class Parse extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("parse", id, prv, service);
    }

    /**
     *  Parse Phone Number
     */
    post(body: PostBody, query?: PostQuery): Promise<PostResponse> {
        return this._send("post", true, body, query).then((res) => {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Phone numbers passed in a string. The maximum value of phone numbers is limited to 64. The maximum number of symbols in each phone number in a string is 64
     */
    originalStrings?: string[];
}

export interface PostQuery {

    /**
     * Internal identifier of a home country. The default value is ISO code (ISO 3166) of the user's home country or brand country, if the user is undefined
     */
    homeCountry?: string;

    /**
     * The default value is "False". If "True", the numbers that are closer to the home country are given higher priority
     */
    nationalAsPriority?: boolean;
}

export interface PostResponse {

    /**
     * Canonical URI of a resource
     */
    uri?: string;

    /**
     * Information on a user home country
     */
    homeCountry?: ParsePhoneNumberCountryInfo[];

    /**
     * Parsed phone numbers data
     */
    phoneNumbers?: ParsePhoneNumberPhoneNumberInfo[];

    /**
     * One of the numbers to be parsed, passed as a string in response
     */
    originalString?: string;

    /**
     * Area code of the location (3-digit usually), according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See North American Numbering Plan for details
     */
    areaCode?: string;

    /**
     * Domestic format of a phone number
     */
    formattedNational?: string;

    /**
     * International format of a phone number
     */
    formattedInternational?: string;

    /**
     * Dialing format of a phone number
     */
    dialable?: string;

    /**
     * E.164 (11-digits) format of a phone number
     */
    e164?: string;

    /**
     * "True" if the number is in a special format (for example N11 code)
     */
    special?: boolean;

    /**
     * E.164 (11-digits) format of a phone number without the plus sign ('+')
     */
    normalized?: string;

    /**
     * Information on a country the phone number belongs to
     */
    country?: ParsePhoneNumberCountryInfo[];
}
