// This is Generated Source.
import GlipPersonInfo from "../definitions/GlipPersonInfo";
import PathSegment from "../PathSegment";

export default class Persons extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("persons", id, prv, service);
    }

    /**
     *  <p>Returns a user or multiple users by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Light</p>
     */
    get(): Promise<GlipPersonInfo> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns a user or multiple users by their ID(s). Batch request is supported.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}
