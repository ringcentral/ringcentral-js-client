// Generated Source

interface CustomGreetingInfo {

    /**
     * Link to an extension custom greeting
     */
    uri?: string;

    /**
     * Internal identifier of an answering rule
     */
    id?: string;

    /**
     * Type of a greeting, specifying the case when the greeting is played. See also Greeting Types
     */
    type?: "Introductory" | "Announcement" | "ConnectingMessage" | "ConnectingAudio" | "Voicemail" | "Unavailable";

    /**
     * Content media type in WAV/MP3 format
     */
    contentType?: string;

    /**
     * Link to a greeting content (audio file)
     */
    contentUri?: string;
}

export default CustomGreetingInfo;
