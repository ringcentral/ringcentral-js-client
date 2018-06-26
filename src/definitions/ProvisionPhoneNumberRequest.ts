// Generated Source
import ExtensionInfoProvisionPhoneNumbers from "./ExtensionInfoProvisionPhoneNumbers";

interface ProvisionPhoneNumberRequest {

    /**
     * Information on extension which the phone number is added to, only for provisioning extension-level numbers
     */
    extensionId?: ExtensionInfoProvisionPhoneNumbers;

    /**
     * Phone number to purchase returned in E.164 (11-digits) format
     */
    phoneNumber?: string;

    /**
     * Internal identifier of phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
     */
    reservationId?: string;

    /**
     * Custom user name of a phone number, if any. Supported for numbers assigned to Auto-Receptionist, with usage type 'CompanyNumber
     */
    label?: string;

    /**
     * Usage type of a phone number. The default value is 'DirectNumber'
     */
    usageType?: "CompanyNumber" | "MainCompanyNumber" | "AdditionalCompanyNumber" | "DirectNumber" | "CompanyFaxNumber" | "ForwardedNumber" | "ForwardedCompanyNumber";

    /**
     * Type of a phone number
     */
    type?: "VoiceFax" | "VoiceOnly" | "FaxOnly";

    /**
     * Vanity pattern that was used to find this number. It should be passed as if it was returned from the Number Lookup call
     */
    vanityPattern?: string;
}

export default ProvisionPhoneNumberRequest;
