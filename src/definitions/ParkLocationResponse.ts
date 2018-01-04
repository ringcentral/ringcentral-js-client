// Generated Source
import ExtensionInfo from "./ExtensionInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface ParkLocationResponse {

    /**
     * List of user extensions allowed to park and unpark calls to/from the extension specified
     */
    records?: ExtensionInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default ParkLocationResponse;
