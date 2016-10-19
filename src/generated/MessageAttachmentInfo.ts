// Generated Source

export interface MessageAttachmentInfo {

    /**
     * Internal identifier of a message attachment
     */
    id?: string;

    /**
     * Canonical URI of a message attachment
     */
    uri?: string;

    /**
     * Type of message attachment
     */
    type?: "AudioRecording" | "AudioTranscription" | "Text" | "SourceDocument" | "RenderedDocument";

    /**
     * MIME type for a given attachment, for instance 'audio/wav'
     */
    contentType?: string;

    /**
     * Voicemail only Duration of the voicemail in seconds
     */
    vmDuration?: number;
}