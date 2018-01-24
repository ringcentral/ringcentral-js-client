// Generated Source
import LicenseInfo from "./LicenseInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface LicenseList {

    /**
     * List of licenses
     */
    records?: LicenseInfo[];

    /**
     * Information on paging
     */
    paging?: PagingInfo;

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;
}

export default LicenseList;
