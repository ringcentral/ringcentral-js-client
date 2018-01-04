// Generated Source
import ExtensionReferenceResource from "./ExtensionReferenceResource";

interface PhoneNumberForProvisioningResource {

    /**
     * 
     */
    phoneNumber?: string;

    /**
     * 
     */
    vanityPattern?: string;

    /**
     * 
     */
    source?: "Internal" | "External";

    /**
     * 
     */
    type?: "VoiceOnly" | "FaxOnly" | "VoiceFax";

    /**
     * 
     */
    usageType?: "MainCompanyNumber" | "AdditionalCompanyNumber" | "CompanyFaxNumber" | "CompanyNumber" | "DirectNumber";

    /**
     * 
     */
    extension?: ExtensionReferenceResource;

    /**
     * 
     */
    reservationId?: string;
}

export default PhoneNumberForProvisioningResource;
