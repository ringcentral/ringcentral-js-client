// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingGroupExtensionInfo from "./PagingGroupExtensionInfo";
import PagingInfo from "./PagingInfo";

interface PagingOnlyGroupUsers {

    /**
     * List of users allowed to page this group
     */
    records?: PagingGroupExtensionInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default PagingOnlyGroupUsers;
