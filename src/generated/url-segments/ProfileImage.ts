// This is Generated Source.
import UrlSection from "../../UrlSection";
import Binary from "../../Binary";
import * as FormData from "form-data";

export default class ProfileImage extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("profile-image", id , prv, service);
    }

    /**
        Get Profile Image
    */
    get(): Promise<Response> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
            return res.response();
        });
    }

    /**
        Update Profile Image
    */
    put(imageData: Binary, contentType = "image/png"): Promise<void> {
        var form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split('/').pop() });
        return this.getService().put(this.getEndpoint(), form).then( res=>{});
    }

    /**
        Update Profile Image (same as PUT)
    */
    post(imageData: Binary, contentType = "image/png"): Promise<void> {
        var form = new FormData();
        form.append("image", imageData, { contentType: contentType, filename: "profile." + contentType.split('/').pop() });
        return this.getService().put(this.getEndpoint(), form).then( res=>{});
    }
}
