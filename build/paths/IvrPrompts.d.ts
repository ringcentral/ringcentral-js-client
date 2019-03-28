import IIvrPrompts from "../definitions/IvrPrompts";
import PromptInfo from "../definitions/PromptInfo";
import PathSegment from "../PathSegment";
import Content from "./Content";
export default class IvrPrompts extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     * Internal identifier of a message attachment
     */
    content(id?: string): Content;
    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Returns a list of IVR prompts.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    list(): Promise<IIvrPrompts>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Returns a list of IVR prompts.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    listRaw(): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Returns an IVR prompt by ID</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    get(): Promise<PromptInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Returns an IVR prompt by ID</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>ReadAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Deletes an IVR prompt by ID</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     */
    delete(): Promise<void>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Deletes an IVR prompt by ID</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    deleteRaw(): Promise<any>;
}
