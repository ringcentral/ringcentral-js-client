import Binary from "../Binary";
import PathSegment from "../PathSegment";
import ProfileImageBase from "./ProfileImageBase";
export default class ProfileImage extends ProfileImageBase {
    constructor(prv: PathSegment, id?: string, service?: any);
    /**
     *  Update Profile Image
     */
    put(imageData: Binary, contentType?: string): Promise<void>;
    /**
     *  Update Profile Image (same as PUT)
     */
    post(imageData: Binary, contentType?: string): Promise<void>;
}
