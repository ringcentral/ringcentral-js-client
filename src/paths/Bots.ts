// This is Generated Source.
import BotExtensionCreation from "../definitions/BotExtensionCreation";
import BotExtensionCreationRequest from "../definitions/BotExtensionCreationRequest";
import PathSegment from "../PathSegment";

export default class Bots extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bots", id, prv, service);
    }

    /**
     *  Creates a bot extension. Please note: Bot extension is always created in Enabled status, no welcome email is sent.
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
     *  Creates a bot extension. Please note: Bot extension is always created in Enabled status, no welcome email is sent.
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
