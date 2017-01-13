// This is Generated Source.
import DialingPlanCountryInfo from "../definitions/DialingPlanCountryInfo";
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";

export default class DialingPlan extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("dialing-plan", id, prv, service);
    }

    /**
     *  Get IBO Dialing Plans
     */
    list(query?: ListQuery): Promise<PagingResult<DialingPlanCountryInfo>> {
        return this.listRaw.apply(this, arguments).then((res) => {
                return res.json();
        });
    }

    /**
     *  Get IBO Dialing Plans
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
