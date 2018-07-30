// This is Generated Source.
import PostGlipFile from "../definitions/PostGlipFile";
import PathSegment from "../PathSegment";

export default class Files extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("files", id, prv, service);
    }

    /**
     *  <p>Posts a file.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Heavy</p>
     */
    post(query?: PostQuery): Promise<PostGlipFile> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Posts a file.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    postRaw(query?: PostQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: query,
        });
    }
}

export interface PostQuery {

    /**
     * Internal identifier of a group to which the post with attachement will be added to
     */
    groupId?: number;

    /**
     * Name of a file attached
     */
    name?: string;
}
