// Generated Source
import GrantInfo from "./GrantInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetExtensionGrantListResponse {

    /**
     * List of extension grants with the data
     */
    records?: GrantInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetExtensionGrantListResponse;
