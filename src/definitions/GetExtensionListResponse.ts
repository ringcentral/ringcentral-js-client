// Generated Source
import GetExtensionInfoResponse from "./GetExtensionInfoResponse";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetExtensionListResponse {

    /**
     * List of extensions with extension information
     */
    records?: GetExtensionInfoResponse[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetExtensionListResponse;
