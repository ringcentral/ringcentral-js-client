import GlipCreatePost from "../definitions/GlipCreatePost";
import GlipPostInfo from "../definitions/GlipPostInfo";
import GlipPosts from "../definitions/GlipPosts";
import PathSegment from "../PathSegment";
export default class Posts extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Returns list of posts.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
     */
    list(query?: ListQuery): Promise<GlipPosts>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Returns list of posts.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    listRaw(query?: ListQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Creates a post.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
     */
    post(body: GlipCreatePost): Promise<GlipPostInfo>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Creates a post.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Light</p>
     *  return {ApiResponse}
     */
    postRaw(body: GlipCreatePost): Promise<any>;
}
export interface ListQuery {
    /**
     * Token of a page to be returned, see Glip Navigation Info
     */
    pageToken?: string;
    /**
     * Max numbers of records to be returned. The default/maximum value is 250
     */
    recordCount?: number;
}
