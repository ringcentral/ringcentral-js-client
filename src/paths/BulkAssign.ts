// This is Generated Source.
import EditGroupRequest from "../definitions/EditGroupRequest";
import GlipGroupInfo from "../definitions/GlipGroupInfo";
import PathSegment from "../PathSegment";

export default class BulkAssign extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bulk-assign", id, prv, service);
    }

    /**
     *  Updates group members. Please note: Only groups of 'Team' type can be updated. Currently only one operation at a time (either adding or removal) is supported.
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
     *  Updates group members. Please note: Only groups of 'Team' type can be updated. Currently only one operation at a time (either adding or removal) is supported.
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
