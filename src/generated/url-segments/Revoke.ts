/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";

export default class Revoke extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("revoke", id , prv, service);
    }

    /**
        OAuth2 Revoke Token
    */
    post(body: PostBody): Promise<void> {
        return this.getService().send({method: "post", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
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
