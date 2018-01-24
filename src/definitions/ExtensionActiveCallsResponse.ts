// Generated Source
import CallLogRecord from "./CallLogRecord";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface ExtensionActiveCallsResponse {

    /**
     * List of call log records
     */
    records?: CallLogRecord[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default ExtensionActiveCallsResponse;
