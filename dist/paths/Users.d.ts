import GetUserListResponse from "../definitions/GetUserListResponse";
import UserCreationRequest from "../definitions/UserCreationRequest";
import UserInfo from "../definitions/UserInfo";
import UserUpdateRequest from "../definitions/UserUpdateRequest";
import PathSegment from "../PathSegment";
export default class Users extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns the list of users requested.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    get(query?: GetQuery): Promise<GetUserListResponse>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns the list of users requested.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Creates a user.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    post(body: UserCreationRequest): Promise<UserInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Creates a user.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: UserCreationRequest): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Updating User using SCIM</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    put(body: UserUpdateRequest): Promise<UserInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Updating User using SCIM</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    putRaw(body: UserUpdateRequest): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Deleting User using scim</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    delete(): Promise<void>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p></p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Deleting User using scim</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any>;
}
export interface GetQuery {
    /**
     * only support 'userName' or 'email' filter expressions for now
     */
    filter?: "userName" | "email";
    /**
     * page size
     */
    count?: number;
    /**
     * start index (1-based)
     */
    startIndex?: number;
}
