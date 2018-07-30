// This is Generated Source.
import ContactResource from "../definitions/ContactResource";
import DirectoryResource from "../definitions/DirectoryResource";
import PathSegment from "../PathSegment";

export default class Contacts extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("contacts", id, prv, service);
    }

    /**
     *  <p>Returns contact information on corporate users of federated accounts. Please note: 1. User, DigitalUser, VirtualUser and FaxUser types are returned as User type. 2.ApplicationExtension type is not returned. 3. Only extensions in Enabled, Disabled and NotActivated state are returned.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    list(query?: ListQuery): Promise<DirectoryResource> {
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
     *  <p>Returns contact information on corporate users of federated accounts. Please note: 1. User, DigitalUser, VirtualUser and FaxUser types are returned as User type. 2.ApplicationExtension type is not returned. 3. Only extensions in Enabled, Disabled and NotActivated state are returned.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Returns contact information on a particular corporate user of a federated account.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    get(): Promise<ContactResource> {
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
     *  <p>Returns contact information on a particular corporate user of a federated account.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     * excludeFederatedContacts
     */
    excludeFederatedContacts?: string;

    /**
     * Type of an extension
     */
    type?: "User" | "Department" | "Announcement" | "Voicemail" | "SharedLinesGroup" | "PagingOnly" | "IvrMenu" | "ParkLocation" | "Limited";

    /**
     * page
     */
    page?: string;

    /**
     * perPage
     */
    perPage?: string;

    /**
     * Internal identifier of the business site to which extensions belongs
     */
    siteId?: string;
}
