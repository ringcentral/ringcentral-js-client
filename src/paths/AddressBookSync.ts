// This is Generated Source.
import IAddressBookSync from "../definitions/AddressBookSync";
import PathSegment from "../PathSegment";

export default class AddressBookSync extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("address-book-sync", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    list(query?: ListQuery): Promise<IAddressBookSync> {
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
     *  <p style='font-style:italic;'></p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadContacts</td><td>Viewing user personal contacts</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Heavy</p>
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
     * Type of synchronization. The default value is 'FSync'
     */
    syncType?: ("FSync" | "ISync")[];

    /**
     * Value of syncToken property of the last sync request response
     */
    syncToken?: string;

    /**
     * Number of records per page to be returned. The max number of records is 250, which is also the default. For FSync ??? if the number of records exceeds the parameter value (either specified or default), all of the pages can be retrieved in several requests. For ISync ??? if the number of records exceeds the page size, the number of incoming changes to this number is limited
     */
    perPage?: number;

    /**
     * Internal identifier of a page. It can be obtained from the 'nextPageId' parameter passed in response body
     */
    pageId?: number;
}
