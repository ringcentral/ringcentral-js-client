// This is Generated Source.
import Check from "./Check";
import PathSegment from "../PathSegment";
import UserPermission from "../definitions/UserPermission";

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
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
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
