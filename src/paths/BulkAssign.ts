// This is Generated Source.
import EditGroupRequest from "../definitions/EditGroupRequest";
import GlipGroupInfo from "../definitions/GlipGroupInfo";
import PathSegment from "../PathSegment";

export default class BulkAssign extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bulk-assign", id, prv, service);
    }

    /**
     *  <p>Updates group members. Please note: Only groups of &#39;Team&#39; type can be updated. Currently only one operation at a time (either adding or removal) is supported.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Medium</p>
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
     *  <p>Updates group members. Please note: Only groups of &#39;Team&#39; type can be updated. Currently only one operation at a time (either adding or removal) is supported.</p><h4>App Permission</h4><p>Glip</p><h4>User Permission</h4><p>Glip</p><h4>Usage Plan Group</h4><p>Medium</p>
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
