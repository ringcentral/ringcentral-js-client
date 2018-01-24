// Generated Source
import LanguageInfo from "./LanguageInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface LanguageList {

    /**
     * Canonical URI of the language list resource
     */
    uri?: string;

    /**
     * Language data
     */
    records?: LanguageInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default LanguageList;
