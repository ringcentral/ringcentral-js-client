import NavigationInfo from "./definitions/NavigationInfo";
import PagingInfo from "./definitions/PagingInfo";

/**
 * PagingResult
 */
export default class PagingResult<T> {

    /**
     * List of real results
     */
    records: T[];

    navigation: NavigationInfo;

    paging: PagingInfo;

    constructor(data: { [n: string]: any }) {
        this.records = data["records"];
        this.navigation = data["navigation"];
        this.paging = data["paging"];
    }
}
