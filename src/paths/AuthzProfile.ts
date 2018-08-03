// This is Generated Source.
import AuthProfileResource from "../definitions/AuthProfileResource";
import PathSegment from "../PathSegment";
import Check from "./Check";

export default class AuthzProfile extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("authz-profile", id, prv, service);
    }

    /**
     * 
     */
    check(id?: string) {
        return new Check(this, id);
    }

    /**
     *  Returns a list of user permissions granted at authorization procedure. Please note: Some permissions may be restricted by extension type.
     */
    get(): Promise<AuthProfileResource> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then((res) => {
                return res.json();
        });
    }

    /**
     *  Returns a list of user permissions granted at authorization procedure. Please note: Some permissions may be restricted by extension type.
     *  return {ApiResponse}
     */
    getRaw(): Promise<any> {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    }
}
