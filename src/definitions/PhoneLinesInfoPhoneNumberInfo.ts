// Generated Source
import CountryInfo from "./CountryInfo";

interface PhoneLinesInfoPhoneNumberInfo {

    /**
     * Internal identifier of a phone number
     */
    id?: number;

    /**
     * Brief information on a phone number country
     */
    country?: CountryInfo;

    /**
     * Location (City, State). Filled for local US numbers
     */
    location?: string;

    /**
     * Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system
     */
    paymentType?: "External" | "TollFree" | "Local";

    /**
     * Phone number
     */
    phoneNumber?: string;

    /**
     * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
     */
    status?: string;

    /**
     * Phone number type
     */
    type?: "VoiceFax" | "FaxOnly" | "VoiceOnly";

    /**
     * Usage type of the phone number
     */
    usageType?: "MainCompanyNumber" | "AdditionalCompanyNumber" | "CompanyNumber" | "DirectNumber" | "CompanyFaxNumber" | "ForwardedNumber";
}

export default PhoneLinesInfoPhoneNumberInfo;
