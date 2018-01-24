// Generated Source
import GetCountryInfoNumberParser from "./GetCountryInfoNumberParser";
import PhoneNumberInfoNumberParser from "./PhoneNumberInfoNumberParser";

interface ParsePhoneNumberResponse {

    /**
     * Canonical URI of a resource
     */
    uri?: string;

    /**
     * Information on a user home country
     */
    homeCountry?: GetCountryInfoNumberParser[];

    /**
     * Parsed phone numbers data
     */
    phoneNumbers?: PhoneNumberInfoNumberParser[];

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
     * True  if the number is in a special format (for example N11 code)
     */
    special?: boolean;

    /**
     * E.164 (11-digits) format of a phone number without the plus sign ('+')
     */
    normalized?: string;

    /**
     * Information on a country the phone number belongs to
     */
    country?: GetCountryInfoNumberParser[];
}

export default ParsePhoneNumberResponse;
