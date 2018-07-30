// Generated Source
import AccountDirectoryProfileImageResource from "./AccountDirectoryProfileImageResource";
import AccountResource from "./AccountResource";
import BusinessSiteResource from "./BusinessSiteResource";
import PhoneNumberResource from "./PhoneNumberResource";

interface ContactResource {

    /**
     * 
     */
    account?: AccountResource;

    /**
     * 
     */
    department?: string;

    /**
     * 
     */
    email?: string;

    /**
     * 
     */
    extensionNumber?: string;

    /**
     * 
     */
    firstName?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    lastName?: string;

    /**
     * 
     */
    jobTitle?: string;

    /**
     * 
     */
    phoneNumbers?: PhoneNumberResource[];

    /**
     * 
     */
    profileImage?: AccountDirectoryProfileImageResource;

    /**
     * 
     */
    site?: BusinessSiteResource;

    /**
     * 
     */
    status?: string;

    /**
     * 
     */
    type?: string;
}

export default ContactResource;
