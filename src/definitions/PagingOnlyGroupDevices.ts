// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingDeviceInfo from "./PagingDeviceInfo";
import PagingInfo from "./PagingInfo";

interface PagingOnlyGroupDevices {

    /**
     * List of paging devices assigned to this group
     */
    records?: PagingDeviceInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default PagingOnlyGroupDevices;
