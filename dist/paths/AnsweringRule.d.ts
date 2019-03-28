import AnsweringRuleInfo from "../definitions/AnsweringRuleInfo";
import CompanyAnsweringRuleList from "../definitions/CompanyAnsweringRuleList";
import CreateAnsweringRuleRequest from "../definitions/CreateAnsweringRuleRequest";
import UpdateAnsweringRuleRequest from "../definitions/UpdateAnsweringRuleRequest";
import PathSegment from "../PathSegment";
export default class AnsweringRule extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.15 (Release 7.0)</p><p>Returns the extension answering rules.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(query?: GetQuery): Promise<void>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.15 (Release 7.0)</p><p>Returns the extension answering rules.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p><p>Creates a custom answering rule for a particular caller ID.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    post(body: CreateAnsweringRuleRequest): Promise<AnsweringRuleInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p><p>Creates a custom answering rule for a particular caller ID.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: CreateAnsweringRuleRequest): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p><p>Updates a custom answering rule for a particular caller ID.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     */
    put(body: UpdateAnsweringRuleRequest): Promise<AnsweringRuleInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.24 (Release 8.0)</p><p>Updates a custom answering rule for a particular caller ID.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditExtensions</td><td>Viewing and updating my extension info (includes extension name, number, email and phone number)</td></tr></tbody></table><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    putRaw(body: UpdateAnsweringRuleRequest): Promise<any>;
    /**
     *
     */
    delete(): Promise<void>;
    /**
     *
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns a list of company answering rules.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    list(): Promise<CompanyAnsweringRuleList>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns a list of company answering rules.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    listRaw(): Promise<any>;
}
export interface GetQuery {
    /**
     *
     */
    page?: string;
    /**
     *
     */
    perPage?: string;
}
