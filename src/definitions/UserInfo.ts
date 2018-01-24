// Generated Source
import AddressInfo from "./AddressInfo";
import EmailInfo from "./EmailInfo";
import MetaInfo from "./MetaInfo";
import NameInfo from "./NameInfo";
import PhoneNumberInfoRequest from "./PhoneNumberInfoRequest";
import PhotoInfo from "./PhotoInfo";

interface UserInfo {

    /**
     * Status of a user
     */
    active?: boolean;

    /**
     * User addresses
     */
    addresses?: AddressInfo[];

    /**
     * User email addresses
     */
    emails?: EmailInfo[];

    /**
     * External identifier of a user
     */
    externalId?: string;

    /**
     * Internal identifier of a user
     */
    id?: string;

    /**
     * User name
     */
    name?: NameInfo;

    /**
     * User phone numbers
     */
    phoneNumbers?: PhoneNumberInfoRequest[];

    /**
     * 
     */
    photos?: PhotoInfo[];

    /**
     * Specification links
     */
    schemas?: ("urn:ietf:params:scim:schemas:core:2.0:User")[];

    /**
     * User mailbox. Must be same as work type email address
     */
    userName?: string;

    /**
     * User metadata
     */
    meta?: MetaInfo;
}

export default UserInfo;
