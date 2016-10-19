/// <reference path="../../typings/tsd.d.ts" />
// This is Generated Source.
import UrlSection from "../../UrlSection";
import Binary from "../../Binary";

export default class Content extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("content", id , prv, service);
    }

    /**
        Get Message Attachment
    */
    get(): Promise<Response> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.response();
        });
    }
}
