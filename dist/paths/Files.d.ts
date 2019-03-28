import PostGlipFile from "../definitions/PostGlipFile";
import PathSegment from "../PathSegment";
export default class Files extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Posts a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     */
    post(query?: PostQuery): Promise<PostGlipFile>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Posts a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Heavy</p>
     *  return {ApiResponse}
     */
    postRaw(query?: PostQuery): Promise<any>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    get(): Promise<PostGlipFile>;
    /**
     *  <p style='font-style:italic;'>Since 1.0.31 (Release 9.2)</p><p>Returns a file.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
}
export interface PostQuery {
    /**
     * Internal identifier of a group the post with file attached will be added to
     */
    groupId?: string;
}
