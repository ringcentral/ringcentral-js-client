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
        return this.getService().send({
          body: body,
          method: "post",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.response();
        });
    }
}

export interface PostBody {

    /**
     * Active access or refresh token to be revoked
     */
    token?: string;
}
