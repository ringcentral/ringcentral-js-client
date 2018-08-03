// This is Generated Source.
import PostGlipFile from "../definitions/PostGlipFile";
import PathSegment from "../PathSegment";

export default class Files extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("files", id, prv, service);
    }

    /**
     *  Posts a file.
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
     *  Posts a file.
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
