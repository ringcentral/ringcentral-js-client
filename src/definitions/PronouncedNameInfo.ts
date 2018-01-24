// Generated Source

interface PronouncedNameInfo {

    /**
     * Voice name typeDefault - default extension name; first name and last name specified in user profileTextToSpeech - custom text; user name spelled the way it sounds and specified by userRecorded - custom audio; user name recorded in user's own voice (supported only for extension retrieval) = ['Default', 'TextToSpeech', 'Recorded']
     */
    type?: "Default" | "TextToSpeech" | "Recorded";

    /**
     * Custom text
     */
    text?: string;
}

export default PronouncedNameInfo;
