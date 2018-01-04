// Generated Source

interface GetCallRecordingResponse {

    /**
     * Internal identifier of the call recording
     */
    id?: string;

    /**
     * Link to the call recording binary content
     */
    contentUri?: string;

    /**
     * Call recording file format. Supported format is audio/x-wav
     */
    contentType?: string;

    /**
     * Recorded call duration
     */
    duration?: number;
}

export default GetCallRecordingResponse;
