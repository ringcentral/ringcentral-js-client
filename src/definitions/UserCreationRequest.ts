// Generated Source
import AddressInfoRequest from "./AddressInfoRequest";
import EmailInfoRequest from "./EmailInfoRequest";
import NameInfoRequest from "./NameInfoRequest";
import PhoneNumberInfoRequest from "./PhoneNumberInfoRequest";

interface UserCreationRequest {

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
}

export default UserCreationRequest;
