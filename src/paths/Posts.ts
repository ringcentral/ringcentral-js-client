// This is Generated Source.
import GlipCreatePost from "../definitions/GlipCreatePost";
import GlipPostInfo from "../definitions/GlipPostInfo";
import GlipPosts from "../definitions/GlipPosts";
import PathSegment from "../PathSegment";

export default class Posts extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("posts", id, prv, service);
    }

    /**
     *  <p>Returns posts which are available for the current user (by group ID). The maximum number of posts returned is 250.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    list(query?: ListQuery): Promise<GlipPosts> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Returns posts which are available for the current user (by group ID). The maximum number of posts returned is 250.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    }

    /**
     *  <p>Creates a new post in a group specified.</p><h4>Usage Plan Group</h4><p>Medium</p>
     */
    post(body: GlipCreatePost): Promise<GlipPostInfo> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  <p>Creates a new post in a group specified.</p><h4>Usage Plan Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: GlipCreatePost): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}

export interface ListQuery {

    /**
     * Max number of records to be returned
     */
    recordCount?: number;

    /**
     * Pagination token
     */
    pageToken?: string;
}
