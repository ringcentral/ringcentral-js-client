// Generated Source
import { PresetInfo } from "./PresetInfo";

export interface GreetingInfo {

    /**
     * Type of a greeting, specifying the case when the greeting is played. See also Greeting Types
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable";

    /**
     * Predefined greeting information
     */
    preset?: PresetInfo;
}
