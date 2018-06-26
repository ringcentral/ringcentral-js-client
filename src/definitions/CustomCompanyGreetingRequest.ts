// Generated Source
import CustomCompanyGreetingAnsweringRuleInfo from "./CustomCompanyGreetingAnsweringRuleInfo";

interface CustomCompanyGreetingRequest {

    /**
     * Type of a greeting, specifying the case when the greeting is played. See Greeting Types = ['Introductory', 'Announcement', 'ConnectingMessage', 'ConnectingAudio', 'Voicemail', 'Unavailable', 'HoldMusic']
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable" | "HoldMusic";

    /**
     * nformation on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomCompanyGreetingAnsweringRuleInfo;
}

export default CustomCompanyGreetingRequest;
