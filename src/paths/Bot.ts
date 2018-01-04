// This is Generated Source.
import BotExtensionCreation from "../definitions/BotExtensionCreation";
import BotExtensionCreationRequest from "../definitions/BotExtensionCreationRequest";
import PathSegment from "../PathSegment";

export default class Bot extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bot", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Creates a bot extension. Please note: Bot extension is always created in Enabled status, no welcome email is sent.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
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
     *  <p style='font-style:italic;'>Since 1.0.32 (Release 9.3)</p><p>Creates a bot extension. Please note: Bot extension is always created in Enabled status, no welcome email is sent.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>EditAccounts</td><td>Viewing and updating user account info (including name, business name, address and phone number/account number)</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
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
