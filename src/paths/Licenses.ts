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
     *  <p>Returns list of licenses for a specific user.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns list of licenses for a specific user.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns license information by its ID.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Returns license information by its ID.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Light</p>
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
     *  <p>Removes a license for a specific user. Please note: It is not allowed to remove assigned licenses (only Webinars and Large Meetings can be assigned).</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Removes a license for a specific user. Please note: It is not allowed to remove assigned licenses (only Webinars and Large Meetings can be assigned).</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>MeetingsPlan</p><h4>Usage Plan Group</h4><p>Medium</p>
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
