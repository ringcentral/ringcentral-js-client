// Generated Source
import PresetInfo from "./PresetInfo";

interface GreetingInfo {

    /**
     * Type of a greeting, specifying the case when the greeting is played. See Greeting Types = ['Introductory', 'Announcement', 'ConnectingMessage', 'ConnectingAudio', 'Voicemail', 'Unavailable', 'InterruptPrompt', 'HoldMusic']
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable" | "InterruptPrompt" | "HoldMusic" | "Custom" | "Company" | "BlockedCallersSpecific" | "BlockedCallersAll" | "BlockedNoCallerId" | "BlockedPayPhones" | "StartRecording" | "StopRecording" | "AutomaticRecording";

    /**
     * Usage type of a greeting, specifying if the greeting is applied to user extension or department extension = ['UserExtensionAnsweringRule', 'ExtensionAnsweringRule DepartmentExtensionAnsweringRule']
     */
    usageType?: "UserExtensionAnsweringRule" | "ExtensionAnsweringRule" | "DepartmentExtensionAnsweringRule";

    /**
     * 
     */
    preset?: PresetInfo;
}

export default GreetingInfo;
