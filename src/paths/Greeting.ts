// This is Generated Source.
import PathSegment from "../PathSegment";
import CustomGreetingInfo from "../definitions/CustomGreetingInfo";
import CustomGreetingInfoAnsweringRuleInfo from "../definitions/CustomGreetingInfoAnsweringRuleInfo";

export default class Greeting extends PathSegment {
    constructor(prv: PathSegment, id?: string, service?) {
        super("greeting", id , prv, service);
    }

    /**
        Create Custom Greeting
    */
    post(body: PostBody): Promise<CustomGreetingInfo> {
        return this.getService().send({method: "post", url: this.getEndpoint(true), query: undefined, body: body }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Custom Greeting by ID
    */
    get(): Promise<CustomGreetingInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(true), query: undefined, body: undefined }).then(function (res) {
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
