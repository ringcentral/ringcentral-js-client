/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import Binary from "../../Binary";

export default class ProfileImage extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("profile-image", id , prv, service);
    }

    /**
        Get Profile Image
    */
    get(): Promise<Response> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.response();
        });
    }

    /**
        Update Profile Image
    */
    put(body: Binary): Promise<void> {
        return this.getService().send({method: "put", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
            return res.response();
        });
    }

    /**
        Update Profile Image (same as PUT)
    */
    post(body: Binary): Promise<void> {
        return this.getService().send({method: "post", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
            return res.response();
        });
    }
}
