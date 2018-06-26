// Generated Source
import ExtensionReferenceResource from "./ExtensionReferenceResource";

interface ReassignPhoneNumberResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    usageType?: "CompanyNumber" | "MainCompanyNumber" | "AdditionalCompanyNumber" | "DirectNumber" | "CompanyFaxNumber" | "ForwardedNumber";

    /**
     * 
     */
    extension?: ExtensionReferenceResource;
}

export default ReassignPhoneNumberResource;
