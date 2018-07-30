// Generated Source
import CustomGreetingAnsweringRuleInfo from "./CustomGreetingAnsweringRuleInfo";

interface CustomUserGreetingInfo {

    /**
     * Link to a custom user greeting
     */
    uri?: string;

    /**
     * Internal identifier of a custom user greeting
     */
    id?: string;

    /**
     * Type of a custom user greeting
     */
    type?: "Introductory" | "Announcement" | "ConnectingAudio" | "ConnectingMessage" | "Voicemail" | "Unavailable" | "HoldMusic";

    /**
     * Content media type in WAV/MP3 format
     */
    contentType?: "WAV" | "MP3";

    /**
     * Link to a greeting content (audio file)
     */
    contentUri?: string;

    /**
     * Information on an answering rule that the greeting is applied to
     */
    answeringRule?: CustomGreetingAnsweringRuleInfo;
}

export default CustomUserGreetingInfo;
