// This is Generated Source.
import PathSegment from "../PathSegment";
import PhoneNumberInfo from "../definitions/PhoneNumberInfo";
import PagingResult from "../PagingResult";

export default class PhoneNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("phone-number", id , prv, service);
    }

    /**
        Get Extension Phone Numbers
    */
    list(query?:ListQuery): Promise<PagingResult<PhoneNumberInfo>> {
        return this.getService().send({method: "get", url: this.getEndpoint(false), query: query, body: undefined }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Phone Number by ID
    */
    get(): Promise<PhoneNumberInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
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
