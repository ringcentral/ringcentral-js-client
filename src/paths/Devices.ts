// This is Generated Source.
import PagingOnlyGroupDevices from "../definitions/PagingOnlyGroupDevices";
import PathSegment from "../PathSegment";

export default class Devices extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("devices", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Returns the list of paging devices assigned to this group.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    list(query?: ListQuery): Promise<PagingOnlyGroupDevices> {
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
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Returns the list of paging devices assigned to this group.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
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
