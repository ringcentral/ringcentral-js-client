// Generated Source
import NavigationInfo from "./NavigationInfo";
import PagingInfo from "./PagingInfo";

interface DictionaryGreetingInfo {

    /**
     * Internal identifier of a greeting
     */
    id?: string;

    /**
     * Link to a greeting
     */
    uri?: string;

    /**
     * Name of a greeting
     */
    name?: string;

    /**
     * Usage type of a greeting, specifying if the greeting is applied for user extension or department extension = ['UserExtensionAnsweringRule', 'ExtensionAnsweringRule', 'DepartmentExtensionAnsweringRule', 'CompanyAnsweringRule', 'CompanyAfterHoursAnsweringRule']
     */
    usageType?: "UserExtensionAnsweringRule" | "ExtensionAnsweringRule" | "DepartmentExtensionAnsweringRule" | "CompanyAnsweringRule" | "CompanyAfterHoursAnsweringRule";

    /**
     * Text of a greeting, if any
     */
    text?: string;

    /**
     * Link to a greeting content (audio file), if any
     */
    contentUri?: string;

    /**
     * Type of a greeting, specifying the case when the greeting is played. See Greeting Types = ['Introductory', 'Announcement', 'ConnectingMessage', 'ConnectingAudio', 'Voicemail', 'Unavailable', 'InterruptPrompt', 'HoldMusic', 'Company']
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable" | "InterruptPrompt" | "HoldMusic" | "Company";

    /**
     * Category of a greeting, specifying data form. The category value 'None' specifies that greetings of a certain type ('Introductory', 'ConnectingAudio', etc.) are switched off for an extension = ['Music', 'Message', 'Ring Tones', 'None']
     */
    category?: "Music" | "Message" | "Ring Tones" | "None";

    /**
     * Information on navigation
     */
    navigation?: NavigationInfo;

    /**
     * Information on paging
     */
    paging?: PagingInfo;
}

export default DictionaryGreetingInfo;
