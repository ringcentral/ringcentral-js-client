// This is Generated Source.
import AuthProfileCheckResource from "../definitions/AuthProfileCheckResource";
import PathSegment from "../PathSegment";

export default class Check extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("check", id, prv, service);
    }

    /**
     *  Checks if a certain user permission is activated for a particular extension.
     */
    get(query?: GetQuery): Promise<AuthProfileCheckResource> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Checks if a certain user permission is activated for a particular extension.
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    }
}

export interface GetQuery {

    /**
     * 
     */
    permissionId?: string;

    /**
     * 
     */
    targetExtensionId?: string;
}
