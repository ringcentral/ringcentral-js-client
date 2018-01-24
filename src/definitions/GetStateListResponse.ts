// Generated Source
import GetStateInfoResponse from "./GetStateInfoResponse";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetStateListResponse {

    /**
     * List of states
     */
    records?: GetStateInfoResponse[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetStateListResponse;
