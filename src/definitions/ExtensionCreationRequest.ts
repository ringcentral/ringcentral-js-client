// Generated Source
import ContactInfoUpdateRequest from "./ContactInfoUpdateRequest";
import ExtensionStatusInfo from "./ExtensionStatusInfo";
import ReferenceInfo from "./ReferenceInfo";
import RegionalSettings from "./RegionalSettings";

interface ExtensionCreationRequest {

    /**
     * Contact Information
     */
    contact?: ContactInfoUpdateRequest;

    /**
     * Number of extension
     */
    extensionNumber?: string;

    /**
     * Password for extension. If not specified, the password is auto-generated
     */
    password?: string;

    /**
     * List of non-RC internal identifiers assigned to an extension
     */
    references?: ReferenceInfo[];

    /**
     * Extension region data (timezone, home country, language)
     */
    regionalSettings?: RegionalSettings;

    /**
     * Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted' = ['NotStarted', 'Incomplete', 'Completed']
     */
    setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

    /**
     * Extension current state = ['Enabled', 'Disabled', 'NotActivated', 'Unassigned']
     */
    status?: "Enabled" | "Disabled" | "NotActivated" | "Unassigned";

    /**
     * Status information (reason, comment). For 'Disabled' status only
     */
    statusInfo?: ExtensionStatusInfo;

    /**
     * Extension type = ['User', 'VirtualUser', 'DigitalUser', 'Department']
     */
    type?: "User" | "VirtualUser" | "DigitalUser" | "Department";
}

export default ExtensionCreationRequest;
