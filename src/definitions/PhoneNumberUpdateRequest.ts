// Generated Source
import ExtensionInfo from "./ExtensionInfo";

interface PhoneNumberUpdateRequest {

    /**
     * Phone number
     */
    value?: string;

    /**
     * Extension Object
     */
    extension?: ExtensionInfo

    /**
     * Phone number type
     */
    usageType?: "DirectNumber" | "CompanyNumber" | "ContactCenterNumber";
}

export default PhoneNumberUpdateRequest;
