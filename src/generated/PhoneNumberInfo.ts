// Generated Source
import { CountryInfo } from "./CountryInfo";
import { PhoneNumberInfoExtensionInfo } from "./PhoneNumberInfoExtensionInfo";

export interface PhoneNumberInfo {

    /**
     * Internal identifier of a phone number
     */
    id?: number;

    /**
     * Brief information on a phone number country
     */
    country?: CountryInfo;

    /**
     * Information on the extension, to which the phone number is assigned. Returned only for the request of Account phone number list
     */
    extension?: PhoneNumberInfoExtensionInfo;

    /**
     * Indicates if this phone number is enabled to appear as CallerId and/or to send outbound SMS from it. Returned only for the request of Extension phone number list
     */
    features?: string[];

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