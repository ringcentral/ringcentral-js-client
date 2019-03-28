import AuthProfileCheckResource from "../definitions/AuthProfileCheckResource";
import PathSegment from "../PathSegment";
export default class Check extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    get(query?: GetQuery): Promise<AuthProfileCheckResource>;
    /**
     *
     *  return {ApiResponse}
     */
    getRaw(query?: GetQuery): Promise<any>;
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
