// Generated Source
import CallQueueInfo from "./CallQueueInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface CallQueues {

    /**
     * Link to a call queues resource
     */
    uri?: string;

    /**
     * List of call queues
     */
    records?: CallQueueInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default CallQueues;
