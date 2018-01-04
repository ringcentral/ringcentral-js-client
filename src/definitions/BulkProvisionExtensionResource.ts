// Generated Source
import ContactInfo from "./ContactInfo";
import DepartmentResource from "./DepartmentResource";
import ExtensionPermissionsResource from "./ExtensionPermissionsResource";
import ProfileImageResource from "./ProfileImageResource";
import Reference from "./Reference";
import RegionalSettingsResource from "./RegionalSettingsResource";
import ServiceFeatureValue from "./ServiceFeatureValue";
import StatusInfo from "./StatusInfo";

interface BulkProvisionExtensionResource {

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
    partnerId?: string;

    /**
     * 
     */
    extensionNumber?: string;

    /**
     * 
     */
    loginName?: string;

    /**
     * 
     */
    contact?: ContactInfo;

    /**
     * 
     */
    references?: Reference[];

    /**
     * 
     */
    name?: string;

    /**
     * 
     */
    type?: "Unknown" | "User" | "Department" | "Announcement" | "Voicemail" | "DigitalUser" | "VirtualUser" | "FaxUser" | "PagingOnly" | "SharedLinesGroup" | "IvrMenu" | "ApplicationExtension" | "ParkLocation";

    /**
     * 
     */
    status?: "Enabled" | "Disabled" | "Frozen" | "NotActivated" | "Unassigned";

    /**
     * 
     */
    statusInfo?: StatusInfo;

    /**
     * 
     */
    departments?: DepartmentResource[];

    /**
     * 
     */
    serviceFeatures?: ServiceFeatureValue[];

    /**
     * 
     */
    regionalSettings?: RegionalSettingsResource;

    /**
     * 
     */
    setupWizardState?: "NotStarted" | "Incomplete" | "Completed" | "Unknown";

    /**
     * 
     */
    permissions?: ExtensionPermissionsResource;

    /**
     * 
     */
    password?: string;

    /**
     * 
     */
    ivrPin?: string;

    /**
     * 
     */
    profileImage?: ProfileImageResource;
}

export default BulkProvisionExtensionResource;
