// This is Generated Source.
import AddBlockedAllowedPhoneNumber from "../definitions/AddBlockedAllowedPhoneNumber";
import BlockedAllowedPhoneNumberInfo from "../definitions/BlockedAllowedPhoneNumberInfo";
import BlockedAllowedPhoneNumbersList from "../definitions/BlockedAllowedPhoneNumbersList";
import PathSegment from "../PathSegment";

export default class PhoneNumbers extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("phone-numbers", id, prv, service);
    }

    /**
     *  <p>Returns the lists of blocked and allowed phone numbers.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    list(query?: ListQuery): Promise<BlockedAllowedPhoneNumbersList> {
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
     *  <p>Returns the lists of blocked and allowed phone numbers.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
     *  <p>Updates either blocked or allowed phone number list with a new phone number.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    post(body: AddBlockedAllowedPhoneNumber): Promise<BlockedAllowedPhoneNumberInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Updates either blocked or allowed phone number list with a new phone number.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: AddBlockedAllowedPhoneNumber): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Returns blocked or allowed phone number(s) by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<BlockedAllowedPhoneNumberInfo> {
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
     *  <p>Returns blocked or allowed phone number(s) by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadBlockedNumbers</p><h4>Usage Plan Group</h4><p>Light</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [accountId] is not found</td></tr> </tbody></table>								
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
     *  <p>Deletes blocked or allowed phone number(s) by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Deletes blocked or allowed phone number(s) by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Medium</p>
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

    /**
     *  <p>Updates blocked or allowed phone number(s) by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    put(): Promise<void> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }

    /**
     *  <p>Updates blocked or allowed phone number(s) by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>EditExtensions</p><h4>User Permission</h4><p>EditBlockedNumbers</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    putRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * 
     */
    page?: number;

    /**
     * 
     */
    perPage?: number;

    /**
     * 
     */
    status?: "Blocked" | "Allowed";
}
