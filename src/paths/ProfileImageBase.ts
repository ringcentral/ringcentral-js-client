// This is Generated Source.
import PathSegment from "../PathSegment";

export default class ProfileImage extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("profile-image", id, prv, service);
    }

    /**
     *  Get Profile Image
     */
    get(): Promise<any> {
    return this._send({
        body: undefined,
        ignoreId: true,
        method: "get",
        query: undefined,
    });
    }
}
