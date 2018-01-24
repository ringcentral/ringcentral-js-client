// Generated Source
import Navigation from "./Navigation";
import Paging from "./Paging";
import PersonalContactResource from "./PersonalContactResource";
import ResourceLink from "./ResourceLink";

interface ContactsCollection {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    records?: PersonalContactResource[];

    /**
     * 
     */
    paging?: Paging;

    /**
     * 
     */
    navigation?: Navigation;

    /**
     * 
     */
    groups?: ResourceLink;
}

export default ContactsCollection;
