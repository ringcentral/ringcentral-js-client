// This is Generated Source.
import PagingResult from "../PagingResult";
import PathSegment from "../PathSegment";
import PhoneNumberInfo from "../definitions/PhoneNumberInfo";

export default class PhoneNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("phone-number", id, prv, service);
    }

    /**
     *  Get Extension Phone Numbers
     */
    list(query?: ListQuery): Promise<PagingResult<PhoneNumberInfo>> {
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
     *  Get Phone Number by ID
     */
    get(): Promise<PhoneNumberInfo> {
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
     * Usage type of the phone number
     */
    usageType?: "MainCompanyNumber" | "AdditionalCompanyNumber" | "CompanyNumber" | "DirectNumber" | "CompanyFaxNumber" | "ForwardedNumber";

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
