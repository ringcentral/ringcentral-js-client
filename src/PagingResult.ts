import NavigationInfo from "./generated/NavigationInfo";
import PagingInfo from "./generated/PagingInfo";

/**
 * PagingResult
 */
export default class PagingResult<T> {
    constructor(data) {
        this.records = data["records"];
        this.navigation = data["navigation"];
        this.paging = data["paging"];
    }

    /**
     * List of real results
     */
    records: T[];

    navigation: NavigationInfo;

    paging: PagingInfo;
}