// Generated Source
import DictionaryLicenseInfo from "./DictionaryLicenseInfo";
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
    records?: DictionaryLicenseInfo[];

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
