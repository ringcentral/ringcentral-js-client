// Generated Source
import CallMonitoringGroupInfo from "./CallMonitoringGroupInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface CallMonitoringGroups {

    /**
     * Link to a call monitoring groups resource
     */
    uri?: string;

    /**
     * List of call monitoring group members
     */
    records?: CallMonitoringGroupInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default CallMonitoringGroups;
