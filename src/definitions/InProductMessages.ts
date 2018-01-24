// Generated Source
import BannerInfo from "./BannerInfo";
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface InProductMessages {

    /**
     * Link to the in-product messages resource
     */
    uri?: string;

    /**
     * The list of in-product messages
     */
    records?: BannerInfo[];

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default InProductMessages;
