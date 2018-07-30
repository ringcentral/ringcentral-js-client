// Generated Source
import CallMonitoringGroupMemberInfo from "./CallMonitoringGroupMemberInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface CallMonitoringGroupMemberList {

    /**
     * Link to a call monitoring group members resource
     */
    uri?: string;

    /**
     * List of a call monitoring group members
     */
    records?: CallMonitoringGroupMemberInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default CallMonitoringGroupMemberList;
