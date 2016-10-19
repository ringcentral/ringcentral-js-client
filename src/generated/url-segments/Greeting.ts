// This is Generated Source.
import UrlSection from "../../UrlSection";
import {CustomGreetingInfo} from "../CustomGreetingInfo";
import {CustomGreetingInfoAnsweringRuleInfo} from "../CustomGreetingInfoAnsweringRuleInfo";

export default class Greeting extends UrlSection {
    constructor(prv: UrlSection, id?: string, service?) {
        super("greeting", id , prv, service);
    }

    /**
        Create Custom Greeting
    */
    post(body: PostBody): Promise<CustomGreetingInfo> {
        return this.getService().send({method: "post", url: this.getEndpoint(), query: null, body: body }).then(function (res) {
            return res.json();
        });
    }

    /**
        Get Custom Greeting by ID
    */
    get(): Promise<CustomGreetingInfo> {
        return this.getService().send({method: "get", url: this.getEndpoint(), query: null, body: null }).then(function (res) {
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
