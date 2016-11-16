// This is Generated Source.
import PathSegment from "../PathSegment";
import TimezoneInfo from "../definitions/TimezoneInfo";
import PagingResult from "../PagingResult";

export default class Timezone extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("timezone", id, prv, service);
    }

    /**
     *  Get Time Zone List
     */
    list(query?: ListQuery): Promise<PagingResult<TimezoneInfo>> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: query,
          url: this.getEndpoint(false),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Get Time Zone by ID
     */
    get(): Promise<TimezoneInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: string;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: string;
}
