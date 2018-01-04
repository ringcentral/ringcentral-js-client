// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";
import PersonalContactResource from "./PersonalContactResource";

interface ContactList {

    /**
     * List of personal contacts from the extension address book
     */
    records?: PersonalContactResource[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default ContactList;
