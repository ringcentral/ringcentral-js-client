// This is Generated Source.
import PathSegment from "../PathSegment";
import Binary from "../Binary";
import * as FormData from "form-data";

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
        }).then(function (res) {
            return res.response();
        });
    }

    /**
     *  Update Profile Image
     */
    put(imageData: Binary, contentType = "image/png"): Promise<void> {
        let form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split("/").pop() });
        return this.getService().put(this.getEndpoint(), form);
    }

    /**
     *  Update Profile Image (same as PUT)
     */
    post(imageData: Binary, contentType = "image/png"): Promise<void> {
        let form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split("/").pop() });
        return this.getService().put(this.getEndpoint(), form);
    }
}
