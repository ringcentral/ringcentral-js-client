// Generated Source
import BlockedAllowedPhoneNumberInfo from "./BlockedAllowedPhoneNumberInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface BlockedAllowedPhoneNumbersList {

    /**
     * Link to a list of blocked/allowed phone numbers resource
     */
    uri?: string;

    /**
     * 
     */
    records?: BlockedAllowedPhoneNumberInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default BlockedAllowedPhoneNumbersList;
