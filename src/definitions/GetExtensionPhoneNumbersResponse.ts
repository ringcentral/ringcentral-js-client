// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";
import UserPhoneNumberInfo from "./UserPhoneNumberInfo";

interface GetExtensionPhoneNumbersResponse {

    /**
     * List of phone numbers
     */
    records?: UserPhoneNumberInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetExtensionPhoneNumbersResponse;
