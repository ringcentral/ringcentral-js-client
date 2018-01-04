// Generated Source
import GetTimezoneInfoResponse from "./GetTimezoneInfoResponse";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetTimezoneListResponse {

    /**
     * List of timezones
     */
    records?: GetTimezoneInfoResponse[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetTimezoneListResponse;
