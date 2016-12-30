// This is Generated Source.
import PathSegment from "../PathSegment";

export default class ProfileImage extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("profile-image", id, prv, service);
    }

    /**
     *  Get Profile Image
     */
    get(): Promise<Response> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.response();
        });
    }
}
