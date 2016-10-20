// Generated Source

export interface RecordingInfo {

    /**
     * Internal identifier of the call recording
     */
    id?: number;

    /**
     * Link to the call recording metadata resource
     */
    uri?: string;

    /**
     * Indicates recording mode used
     */
    type?: "Automatic" | "OnDemand";

    /**
     * Link to the call recording binary content
     */
    contentUri?: string;
}
