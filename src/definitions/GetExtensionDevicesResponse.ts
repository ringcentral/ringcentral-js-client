// Generated Source
import GetDeviceInfoResponse from "./GetDeviceInfoResponse";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetExtensionDevicesResponse {

    /**
     * List of extension devices
     */
    records?: GetDeviceInfoResponse[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetExtensionDevicesResponse;
