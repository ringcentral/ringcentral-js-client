// Generated Source
import ContactInfoUpdateRequest from "./ContactInfoUpdateRequest";
import ExtensionStatusInfo from "./ExtensionStatusInfo";
import ReferenceInfo from "./ReferenceInfo";
import RegionalSettings from "./RegionalSettings";
import Roles from "./Roles";

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
     * 
     */
    roles?: Roles[];

    /**
     * Extension region data (timezone, home country, language)
     */
    regionalSettings?: RegionalSettings;

    /**
     * Specifies extension configuration wizard state (web service setup).
     */
    setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

    /**
     * Extension current state
     */
    status?: "Enabled" | "Disabled" | "NotActivated" | "Unassigned";

    /**
     * Status information (reason, comment). For 'Disabled' status only
     */
    statusInfo?: ExtensionStatusInfo;

    /**
     * Extension type
     */
    type?: "User" | "VirtualUser" | "DigitalUser" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnlyGroup" | "ParkLocation";

    /**
     * Hides extension from showing in company directory. Supported for extensions of User type only. For unassigned extensions the value is set to 'True' by default. For assigned extensions the value is set to 'False' by default
     */
    hidden?: boolean;
}

export default ExtensionCreationRequest;
