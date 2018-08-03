// This is Generated Source.
import CompanyPhoneNumberInfo from "../definitions/CompanyPhoneNumberInfo";
import GetExtensionPhoneNumbersResponse from "../definitions/GetExtensionPhoneNumbersResponse";
import PathSegment from "../PathSegment";

export default class PhoneNumber extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("phone-number", id, prv, service);
    }

    /**
     *  Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level numbers which may be used when performing different operations on behalf of this extension.
     */
    list(query?: ListQuery): Promise<GetExtensionPhoneNumbersResponse> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns the list of phone numbers that are used by a particular extension, and can be filtered by the phone number type. The returned list contains all numbers which are directly mapped to a given extension plus the features and also company-level numbers which may be used when performing different operations on behalf of this extension.
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

    /**
     *  Returns the phone number(s) belonging to a certain account or extension by phoneNumberId(s). Batch request is supported.
     */
    get(): Promise<CompanyPhoneNumberInfo> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns the phone number(s) belonging to a certain account or extension by phoneNumberId(s). Batch request is supported.
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Usage type of a phone number
     */
    usageType?: ("MainCompanyNumber" | "AdditionalCompanyNumber" | "CompanyNumber" | "DirectNumber" | "CompanyFaxNumber" | "ForwardedNumber")[];

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'
     */
    page?: number;

    /**
     * Indicates the page size (number of items). If not specified, the value is '100' by default
     */
    perPage?: number;
}
