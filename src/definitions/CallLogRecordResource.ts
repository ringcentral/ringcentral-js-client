// Generated Source
import CallLogRecordingResource from "./CallLogRecordingResource";
import CallerInfo from "./CallerInfo";

interface CallLogRecordResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    sessionId?: string;

    /**
     * 
     */
    startTime?: string;

    /**
     * 
     */
    duration?: number;

    /**
     * 
     */
    type?: "Voice" | "Fax";

    /**
     * 
     */
    direction?: "Inbound" | "Outbound";

    /**
     * 
     */
    action?: string;

    /**
     * 
     */
    result?: string;

    /**
     * 
     */
    to?: CallerInfo;

    /**
     * 
     */
    from?: CallerInfo;

    /**
     * 
     */
    recording?: CallLogRecordingResource;
}

export default CallLogRecordResource;
