// Generated Source
import CallQueueMemberInfo from "./CallQueueMemberInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface CallQueueMembers {

    /**
     * Link to a call queue members resource
     */
    uri?: string;

    /**
     * List of call queue members
     */
    records?: CallQueueMemberInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default CallQueueMembers;
