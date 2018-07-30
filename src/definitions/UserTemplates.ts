// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";
import TemplateInfo from "./TemplateInfo";

interface UserTemplates {

    /**
     * Link to user templates resource
     */
    uri?: string;

    /**
     * List of user templates
     */
    records?: TemplateInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default UserTemplates;
