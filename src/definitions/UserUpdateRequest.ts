// Generated Source
import AddressInfoRequest from "./AddressInfoRequest";
import EmailInfoRequest from "./EmailInfoRequest";
import NameInfoRequest from "./NameInfoRequest";
import PhoneNumberInfoRequest from "./PhoneNumberInfoRequest";

interface UserUpdateRequest {

    /**
     * Specification links
     */
    schemas?: string[];

    /**
     * User name
     */
    name?: NameInfoRequest;

    /**
     * User mailbox
     */
    userName?: string;

    /**
     * User email addresses
     */
    emails?: EmailInfoRequest[];

    /**
     * Status of a user
     */
    active?: boolean;

    /**
     * User phone numbers
     */
    phoneNumbers?: PhoneNumberInfoRequest[];

    /**
     * External identifier of a user
     */
    externalId?: string;

    /**
     * User addresses
     */
    addresses?: AddressInfoRequest;

    /**
     * Internal identifier of a user
     */
    id?: string;
}

export default UserUpdateRequest;
