// Generated Source
import CompanyDirectoryAccountInfo from "./CompanyDirectoryAccountInfo";
import CompanyDirectoryPhoneNumberInfo from "./CompanyDirectoryPhoneNumberInfo";
import CompanyDirectoryProfileImageInfo from "./CompanyDirectoryProfileImageInfo";
import SiteInfo from "./SiteInfo";

interface ContactDirectoryEvent {

    /**
     * Internal identifier of an extension
     */
    id?: string;

    /**
     * Type of change
     */
    eventType?: string;

    /**
     * Extension Type
     */
    type?: string;

    /**
     * Status of an extension
     */
    status?: "Disabled" | "Enabled" | "NotActivated";

    /**
     * First name of an extension user
     */
    firstName?: string;

    /**
     * Last name of an extension user
     */
    lastName?: string;

    /**
     * Department Name
     */
    department?: string;

    /**
     * Email of an extension user
     */
    email?: string;

    /**
     * Extension number
     */
    extensionNumber?: string;

    /**
     * Account data of an extension
     */
    account?: CompanyDirectoryAccountInfo;

    /**
     * Extension phone number information
     */
    phoneNumbers?: CompanyDirectoryPhoneNumberInfo;

    /**
     * Site Data
     */
    site?: SiteInfo;

    /**
     * Extension profile image information. Not returned if profile images are absent for an extension
     */
    profileImage?: CompanyDirectoryProfileImageInfo;
}

export default ContactDirectoryEvent;
