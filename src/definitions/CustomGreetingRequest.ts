// Generated Source
import CustomGreetingAnsweringRuleInfoRequest from "./CustomGreetingAnsweringRuleInfoRequest";

interface CustomGreetingRequest {

    /**
     * Type of a greeting, specifying the case when the greeting is played. See Greeting Types = ['Introductory', 'Announcement', 'ConnectingMessage', 'ConnectingAudio', 'Voicemail', 'Unavailable', 'HoldMusic']
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable" | "HoldMusic";

    /**
     * nformation on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomGreetingAnsweringRuleInfoRequest;
}

export default CustomGreetingRequest;
