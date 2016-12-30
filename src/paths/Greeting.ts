// This is Generated Source.
import CustomGreetingInfo from "../definitions/CustomGreetingInfo";
import CustomGreetingInfoAnsweringRuleInfo from "../definitions/CustomGreetingInfoAnsweringRuleInfo";
import PathSegment from "../PathSegment";

export default class Greeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("greeting", id, prv, service);
    }

    /**
     *  Create Custom Greeting
     */
    post(body: PostBody): Promise<CustomGreetingInfo> {
        return this._send("post", true, body, undefined).then((res) => {
            return res.json();
        });
    }

    /**
     *  Get Custom Greeting by ID
     */
    get(): Promise<CustomGreetingInfo> {
        return this._send("get", true, undefined, undefined).then((res) => {
            return res.json();
        });
    }
}

export interface PostBody {

    /**
     * Type of a greeting, specifying the case when the greeting is played. See also Greeting Types
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable";

    /**
     * Information on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomGreetingInfoAnsweringRuleInfo;
}
