// Generated Source
import LineInfo from "./LineInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetMonitoredExtensionsResponse {

    /**
     * Canonical URI of the monitored lines (extensions) resource
     */
    uri?: string;

    /**
     * List of lines (extensions) the presence of which is monitored by the user. The first two lines always indicate the user's extension presence, they cannot be changed
     */
    records?: LineInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetMonitoredExtensionsResponse;
