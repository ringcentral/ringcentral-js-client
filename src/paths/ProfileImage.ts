// This is Generated Source.
import * as FormData from "form-data";
import Binary from "../Binary";
import PathSegment from "../PathSegment";
import ProfileImageBase from "./ProfileImageBase";

export default class ProfileImage extends ProfileImageBase {
    constructor(prv: PathSegment, id?: string, service?) {
        super(prv, id, service);
    }

    /**
     *  Update Profile Image
     */
    put(imageData: Binary, contentType = "image/png"): Promise<void> {
        const form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split("/").pop() });
        return this.getService().put(this.getEndpoint(), form);
    }

    /**
     *  Update Profile Image (same as PUT)
     */
    post(imageData: Binary, contentType = "image/png"): Promise<void> {
        const form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split("/").pop() });
        return this.getService().put(this.getEndpoint(), form);
    }
}
