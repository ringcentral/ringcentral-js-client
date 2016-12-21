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
        return this.getService().send({
          body: body,
          method: "post",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
            return res.json();
        });
    }

    /**
     *  Get Custom Greeting by ID
     */
    get(): Promise<CustomGreetingInfo> {
        return this.getService().send({
          body: undefined,
          method: "get",
          query: undefined,
          url: this.getEndpoint(true),
        }).then(function (res) {
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
