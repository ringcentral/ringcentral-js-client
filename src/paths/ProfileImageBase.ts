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
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then((res) => {
            return res.response();
        });
    }
}
