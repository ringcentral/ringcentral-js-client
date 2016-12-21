// This is Generated Source.
import CustomData from "./CustomData";
import PathSegment from "../PathSegment";

export default class ClientInfo extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("client-info", id, prv, service);
    }

    /**
     * Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension
     */
    customData(id?: string) {
        return new CustomData(this, id);
    }
}
