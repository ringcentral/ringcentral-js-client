// This is Generated Source.
import UserPermission from "../definitions/UserPermission";
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
     *  Get User Permissions
     */
    get(): Promise<GetResponse> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}

export interface GetResponse {

    /**
     * Canonical URI of an authorization profile resource
     */
    uri?: string;

    /**
     * List of user permissions granted
     */
    permissions?: UserPermission[];
}
