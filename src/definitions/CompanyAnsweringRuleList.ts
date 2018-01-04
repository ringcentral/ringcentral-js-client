// Generated Source
import ListCompanyAnsweringRuleInfo from "./ListCompanyAnsweringRuleInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface CompanyAnsweringRuleList {

    /**
     * Link to an answering rule resource
     */
    uri?: string;

    /**
     * List of company answering rules
     */
    records?: ListCompanyAnsweringRuleInfo[];

    /**
     * Information on paging
     */
    paging?: PagingInfo;

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;
}

export default CompanyAnsweringRuleList;
