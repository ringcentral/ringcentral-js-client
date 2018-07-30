// This is Generated Source.
import IIvrPrompts from "../definitions/IvrPrompts";
import PromptInfo from "../definitions/PromptInfo";
import PathSegment from "../PathSegment";
import Content from "./Content";

export default class IvrPrompts extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("ivr-prompts", id, prv, service);
    }

    /**
     * Internal identifier of a message attachment
     */
    content(id?: string) {
        return new Content(this, id);
    }

    /**
     *  <p>Creates an IVR prompt.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyGreetings</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>IVR-100</td><td>[Unsupported media type</td></tr><tr><td>400</td><td>IVR-101</td><td>IVR prompt file name not specified.</td></tr><tr><td>400</td><td>IVR-103</td><td>IVR prompt file is required.</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditCompanyGreetings] permission for requested resource.</td></tr> </tbody></table>								
     */
    post(): Promise<PromptInfo> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Creates an IVR prompt.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyGreetings</p><h4>Usage Plan Group</h4><p>Heavy</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>IVR-100</td><td>[Unsupported media type</td></tr><tr><td>400</td><td>IVR-101</td><td>IVR prompt file name not specified.</td></tr><tr><td>400</td><td>IVR-103</td><td>IVR prompt file is required.</td></tr><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [EditAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [EditCompanyGreetings] permission for requested resource.</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  <p>Returns a list of IVR prompts.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyGreetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCompanyGreetings] permission for requested resource.</td></tr> </tbody></table>								
     */
    list(): Promise<IIvrPrompts> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns a list of IVR prompts.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyGreetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCompanyGreetings] permission for requested resource.</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    listRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    }

    /**
     *  <p>Returns an IVR prompt by ID.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyGreetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCompanyGreetings] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [promptId] is not found</td></tr> </tbody></table>								
     */
    get(): Promise<PromptInfo> {
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
     *  <p>Returns an IVR prompt by ID.</p><h4>App Permission</h4><p>ReadAccounts</p><h4>User Permission</h4><p>ReadCompanyGreetings</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>403</td><td>CMN-401</td><td>In order to call this API endpoint, application needs to have [ReadAccounts] permission</td></tr><tr><td>403</td><td>CMN-408</td><td>In order to call this API endpoint, user needs to have [ReadCompanyGreetings] permission for requested resource.</td></tr><tr><td>404</td><td>CMN-102</td><td>Resource for parameter [promptId] is not found</td></tr> </tbody></table>								
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
     *  <p>Deletes an IVR prompt by ID.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyGreetings</p><h4>Usage Plan Group</h4><p>Heavy</p>
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
     *  <p>Deletes an IVR prompt by ID.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>EditCompanyGreetings</p><h4>Usage Plan Group</h4><p>Heavy</p>
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
