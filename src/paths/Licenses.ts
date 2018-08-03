// This is Generated Source.
import LicenseInfo from "../definitions/LicenseInfo";
import LicenseList from "../definitions/LicenseList";
import PathSegment from "../PathSegment";
import BulkPurchase from "./BulkPurchase";

export default class Licenses extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("licenses", id, prv, service);
    }

    /**
     * 
     */
    bulkPurchase(id?: string) {
        return new BulkPurchase(this, id);
    }

    /**
     *  Returns list of licenses for a specific user.
     */
    list(query?: ListQuery): Promise<LicenseList> {
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
     *  Returns list of licenses for a specific user.
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
     *  Returns license information by its ID.
     */
    get(): Promise<LicenseInfo> {
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
     *  Returns license information by its ID.
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

    /**
     *  Removes a license for a specific user. Please note: It is not allowed to remove assigned licenses (only Webinars and Large Meetings can be assigned).
     */
    delete(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }

    /**
     *  Removes a license for a specific user. Please note: It is not allowed to remove assigned licenses (only Webinars and Large Meetings can be assigned).
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     */
    page?: number;

    /**
     * Indicates the page size (number of items)
     */
    perPage?: number;

    /**
     * Internal identifier of a license type. If not specified account licenses of all types are returned
     */
    typeId?: number;
}
