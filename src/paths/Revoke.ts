// This is Generated Source.
import PathSegment from "../PathSegment";

export default class Revoke extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("revoke", id, prv, service);
    }

    /**
     *  OAuth2 Revoke Token
     */
    post(body: PostBody): Promise<void> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }

    /**
     *  OAuth2 Revoke Token
     *  return {ApiResponse}
     */
    postRaw(body: PostBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}

export interface PostBody {

    /**
     * Active access or refresh token to be revoked
     */
    token?: string;
}
