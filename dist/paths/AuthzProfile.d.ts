import AuthProfileResource from "../definitions/AuthProfileResource";
import PathSegment from "../PathSegment";
import Check from "./Check";
export default class AuthzProfile extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *
     */
    check(id?: string): Check;
    /**
     *
     */
    get(): Promise<AuthProfileResource>;
    /**
     *
     *  return {ApiResponse}
     */
    getRaw(): Promise<any>;
}
