// Generated Source
import LocationInfo from "./LocationInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetLocationListResponse {

    /**
     * List of locations
     */
    records?: LocationInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetLocationListResponse;
