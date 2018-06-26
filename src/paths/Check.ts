// This is Generated Source.
import AuthProfileCheckResource from "../definitions/AuthProfileCheckResource";
import PathSegment from "../PathSegment";

export default class Check extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("check", id, prv, service);
    }

    /**
     *  
     */
    get(query?: GetQuery): Promise<AuthProfileCheckResource> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
            throttlingGroup: "Light",
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
            throttlingGroup: "Light",
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
