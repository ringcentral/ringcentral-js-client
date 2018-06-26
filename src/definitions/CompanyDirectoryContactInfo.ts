// Generated Source
import CompanyDirectoryAccountInfo from "./CompanyDirectoryAccountInfo";
import CompanyDirectoryPhoneNumberInfo from "./CompanyDirectoryPhoneNumberInfo";
import CompanyDirectoryProfileImageInfo from "./CompanyDirectoryProfileImageInfo";

interface CompanyDirectoryContactInfo {

    /**
     * Internal identifier of an extension
     */
    id?: string;

    /**
     * Type of an extension
     */
    type?: "User" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnly" | "IvrMenu" | "ParkLocation" | "Limited";

    /**
     * Status of an extension
     */
    status?: "Enabled" | "Disabled" | "NotActivated";

    /**
     * User extension first name
     */
    firstName?: string;

    /**
     * User extension last name
     */
    lastName?: string;

    /**
     * Name of an extension
     */
    name?: string;

    /**
     * Department name of an extension
     */
    department?: string;

    /**
     * Email of an extension
     */
    email?: string;

    /**
     * Number of an extension
     */
    extensionNumber?: string;

    /**
     * Account data of an extension
     */
    account?: CompanyDirectoryAccountInfo;

    /**
     * Extension phone numbers information
     */
    phoneNumbers?: CompanyDirectoryPhoneNumberInfo[];

    /**
     * Extension profile image information. Not returned if profile images are absent for an extension
     */
    profileImage?: CompanyDirectoryProfileImageInfo;
}

export default CompanyDirectoryContactInfo;
