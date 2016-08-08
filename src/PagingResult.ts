import { NavigationInfo } from "./generated/NavigationInfo";
import { PagingInfo } from "./generated/PagingInfo";

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

function convertArray<T>(ar, constr: {new(a): T}): T[] {
    var typedAr: T[] = [];
    for (var i = 0; i < ar.length; i++) {
        typedAr.push(new constr(ar[i]));
    }
    return typedAr;
}