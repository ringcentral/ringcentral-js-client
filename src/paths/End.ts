// This is Generated Source.
import PathSegment from "../PathSegment";

export default class End extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("end", id , prv, service);
    }

    /**
        End Current Meeting
    */
    post(): Promise<void> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
            return res.response();
        });
    }
}
