// Generated Source
import ContactAddressInfo from "./ContactAddressInfo";
import PronouncedNameInfo from "./PronouncedNameInfo";

interface ContactInfoUpdateRequest {

    /**
     * For User extension type only. Extension user first name,
     */
    firstName?: string;

    /**
     * For User extension type only. Extension user last name,
     */
    lastName?: string;

    /**
     * Extension user company name
     */
    company?: string;

    /**
     * Email of extension user
     */
    email?: string;

    /**
     * Extension user contact phone number in E.164 format
     */
    businessPhone?: string;

    /**
     * 
     */
    businessAddress?: ContactAddressInfo;

    /**
     * If 'True' then contact email is enabled as login name for this user. Please note that email should be unique in this case. The default value is 'False'
     */
    emailAsLoginName?: boolean;

    /**
     * 
     */
    pronouncedName?: PronouncedNameInfo;

    /**
     * Extension user department, if any
     */
    department?: string;
}

export default ContactInfoUpdateRequest;
