// Generated Source
import ContactAddressInfo from "./ContactAddressInfo";

interface PersonalContactInfo {

    /**
     * Standard resource properties ID
     */
    id?: string;

    /**
     * Canonical URI
     */
    url?: string;

    /**
     * This property has a special meaning only on Address Book Sync (e.g. a contact can be 'Deleted'). For simple contact list reading it has always the default value - 'Alive'
     */
    availability?: "Alive" | "Deleted" | "Purged";

    /**
     * First name of a personal contact
     */
    firstName?: string;

    /**
     * Last name of a personal contact
     */
    lastName?: string;

    /**
     * Middle name of a personal contact
     */
    middleName?: string;

    /**
     * Nick name of a personal contact
     */
    nickName?: string;

    /**
     * Company name of a personal contact
     */
    company?: string;

    /**
     * Job title of a personal contact
     */
    jobTitle?: string;

    /**
     * Home phone of a personal contact
     */
    homePhone?: string;

    /**
     * The 2-d home phone of a personal contact
     */
    homePhone2?: string;

    /**
     * Business phone of a personal contact
     */
    businessPhone?: string;

    /**
     * The 2-d business phone of a personal contact
     */
    businessPhone2?: string;

    /**
     * Mobile phone of a personal contact
     */
    mobilePhone?: string;

    /**
     * Business fax of a personal contact
     */
    businessFax?: string;

    /**
     * Company phone of a personal contact
     */
    companyPhone?: string;

    /**
     * Assistant phone of a personal contact
     */
    assistantPhone?: string;

    /**
     * Car phone of a personal contact
     */
    carPhone?: string;

    /**
     * Other phone of a personal contact
     */
    otherPhone?: string;

    /**
     * Other fax of a personal contact
     */
    otherFax?: string;

    /**
     * Callback phone of a personal contact
     */
    callbackPhone?: string;

    /**
     * Email of a personal contact
     */
    email?: string;

    /**
     * The 2-d email of a personal contact
     */
    email2?: string;

    /**
     * The 3-d email of a personal contact
     */
    email3?: string;

    /**
     * Home address of a personal contact
     */
    homeAddress?: ContactAddressInfo;

    /**
     * Business address of a personal contact
     */
    businessAddress?: ContactAddressInfo;

    /**
     * Other address of a personal contact
     */
    otherAddress?: ContactAddressInfo;

    /**
     * Date of birth of a personal contact in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    birthday?: string;

    /**
     * Web page of a personal contact
     */
    webPage?: string;

    /**
     * Notes of a personal contact
     */
    notes?: string;
}

export default PersonalContactInfo;
