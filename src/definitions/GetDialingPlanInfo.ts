// Generated Source
import GetDialingPlanCountryInfo from "./GetDialingPlanCountryInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface GetDialingPlanInfo {

    /**
     * List of countries which can be selected for a dialing plan
     */
    records?: GetDialingPlanCountryInfo[];

    /**
     * Information on paging
     */
    paging?: PagingInfo;

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;
}

export default GetDialingPlanInfo;
