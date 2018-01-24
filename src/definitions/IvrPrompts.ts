// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";
import PromptInfo from "./PromptInfo";

interface IvrPrompts {

    /**
     * Link to prompts library resource
     */
    uri?: string;

    /**
     * List of Prompts
     */
    records?: PromptInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default IvrPrompts;
