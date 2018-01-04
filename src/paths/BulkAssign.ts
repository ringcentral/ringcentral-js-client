// This is Generated Source.
import EditGroupRequest from "../definitions/EditGroupRequest";
import GlipGroupInfo from "../definitions/GlipGroupInfo";
import PathSegment from "../PathSegment";

export default class BulkAssign extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bulk-assign", id, prv, service);
    }

    /**
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Updates group members. Please note: Only groups of 'Team' type can be updated. Currently only one operation at a time (either adding or removal) is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     */
    post(body: EditGroupRequest): Promise<GlipGroupInfo> {
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
     *  <p style='font-style:italic;'>Since 1.0.28 (Release 8.4)</p><p>Updates group members. Please note: Only groups of 'Team' type can be updated. Currently only one operation at a time (either adding or removal) is supported.</p><h4>Required Permissions</h4><table class='fullwidth'><thead><tr><th>Permission</th><th>Description</th></tr></thead><tbody><tr><td class='code'>Glip</td><td>Availability of Glip</td></tr></tbody></table><h4>API Group</h4><p>Medium</p>
     *  return {ApiResponse}
     */
    postRaw(body: EditGroupRequest): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}
