// Generated Source
import GetPresenceInfo from "./GetPresenceInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface AccountPresenceInfo {

    /**
     * Canonical URI of account presence resource
     */
    uri?: string;

    /**
     * List of Prompts
     */
    records?: GetPresenceInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default AccountPresenceInfo;
