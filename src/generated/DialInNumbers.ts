// Generated Source
import { DialInNumbersCountryInfo } from "./DialInNumbersCountryInfo";

export interface DialInNumbers {

    /**
     * Phone number of the dial-in number for the meeting in e.164 format
     */
    phoneNumber?: string;

    /**
     * Phone number of the dial-in number formatted according to the extension home country
     */
    formattedNumber?: string;

    /**
     * Optional field in case the dial-in number is associated with a particular location
     */
    location?: string;

    /**
     * Country resource corresponding to the dial-in number
     */
    country?: DialInNumbersCountryInfo;
}
