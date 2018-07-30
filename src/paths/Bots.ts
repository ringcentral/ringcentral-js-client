// This is Generated Source.
import BotExtensionCreation from "../definitions/BotExtensionCreation";
import BotExtensionCreationRequest from "../definitions/BotExtensionCreationRequest";
import PathSegment from "../PathSegment";

export default class Bots extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bots", id, prv, service);
    }

    /**
     *  <p>Creates a bot extension. Please note: Bot extension is always created in Enabled status, no welcome email is sent.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>AddRemoveUsers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>EXT-353</td><td>Bot extension creation is not allowed for HIPAA compliant accounts.</td></tr><tr><td>409</td><td>EXT-232</td><td>Bot with the same application key already exists.</td></tr> </tbody></table>								
     */
    post(body: BotExtensionCreationRequest): Promise<BotExtensionCreation> {
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
     *  <p>Creates a bot extension. Please note: Bot extension is always created in Enabled status, no welcome email is sent.</p><h4>App Permission</h4><p>EditAccounts</p><h4>User Permission</h4><p>AddRemoveUsers</p><h4>Usage Plan Group</h4><p>Medium</p><h4>Error Codes</h4><table> <thead>  <tr>   <th>HTTP Code</th>   <th>Error Code</th>   <th>Error Message</th>  </tr> </thead> <tbody><tr><td>400</td><td>EXT-353</td><td>Bot extension creation is not allowed for HIPAA compliant accounts.</td></tr><tr><td>409</td><td>EXT-232</td><td>Bot with the same application key already exists.</td></tr> </tbody></table>								
     *  return {ApiResponse}
     */
    postRaw(body: BotExtensionCreationRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
