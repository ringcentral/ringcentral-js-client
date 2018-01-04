// Generated Source
import GetCountryInfoDictionaryResponse from "./GetCountryInfoDictionaryResponse";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetCountryListResponse {

    /**
     * List of countries with the country data
     */
    records?: GetCountryInfoDictionaryResponse[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default GetCountryListResponse;
