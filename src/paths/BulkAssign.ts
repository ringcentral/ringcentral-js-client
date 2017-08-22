// This is Generated Source.
import GlipGroupInfo from "../definitions/GlipGroupInfo";
import PathSegment from "../PathSegment";

export default class BulkAssign extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("bulk-assign", id, prv, service);
    }

    /**
     *  Edit Group Members
     */
    post(body: PostBody): Promise<GlipGroupInfo> {
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
     *  Edit Group Members
     *  return {ApiResponse}
     */
    postRaw(body: PostBody): Promise<any> {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    }
}

export interface PostBody {

    /**
     * List of users to be added to the team
     */
    addedPersonIds?: string[];

    /**
     * List of user email addresses to be added to the team (i.e. as guests)
     */
    addedPersonEmails?: string[];

    /**
     * List of users to be removed from the team
     */
    removedPersonIds?: string[];
}
