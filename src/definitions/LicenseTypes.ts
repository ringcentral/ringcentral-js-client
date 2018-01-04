// Generated Source
import LicenseInfo from "./LicenseInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface LicenseTypes {

    /**
     * Canonical URI of a license types resource
     */
    uri?: string;

    /**
     * List of supported licenses
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

export default LicenseTypes;
