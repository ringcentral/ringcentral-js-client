// Generated Source
import ForwardingNumberInfo from "./ForwardingNumberInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetExtensionForwardingNumberListResponse {

    /**
     * List of forwarding phone numbers
     */
    records?: ForwardingNumberInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetExtensionForwardingNumberListResponse;
