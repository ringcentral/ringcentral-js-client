// Generated Source
import AddressInfo from "./AddressInfo";
import EmailInfo from "./EmailInfo";
import MetaInfo from "./MetaInfo";
import NameInfo from "./NameInfo";
import PhoneNumberInfo from "./PhoneNumberInfo";

interface UserInfo {

    /**
     * Specification links
     */
    schemas?: string[];

    /**
     * Internal identifier of a user
     */
    id?: string;

    /**
     * External identifier of a user
     */
    externalId?: string;

    /**
     * User metadata
     */
    meta?: MetaInfo;

    /**
     * User mailbox
     */
    userName?: string;

    /**
     * User name
     */
    name?: NameInfo;

    /**
     * Status of a user
     */
    active?: boolean;

    /**
     * User email addresses
     */
    emails?: EmailInfo[];

    /**
     * User phone numbers
     */
    phoneNumbers?: PhoneNumberInfo[];

    /**
     * User addresses
     */
    addresses?: AddressInfo[];
}

export default UserInfo;
