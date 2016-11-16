// This is Generated Source.
import PathSegment from "../PathSegment";
import Binary from "../Binary";

export default class Content extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("content", id , prv, service);
    }

    /**
        Get Message Attachment
    */
    get(): Promise<Response> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    }
}
