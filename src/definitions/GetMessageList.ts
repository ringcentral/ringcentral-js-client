// Generated Source
import GetMessageInfoResponse from "./GetMessageInfoResponse";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetMessageList {

    /**
     * List of records with message information
     */
    records?: GetMessageInfoResponse[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetMessageList;
