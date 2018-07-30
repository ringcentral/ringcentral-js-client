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
}

export default ParsePhoneNumberResponse;
