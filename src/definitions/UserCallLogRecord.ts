// Generated Source
import CallLogCallerInfo from "./CallLogCallerInfo";
import RecordingInfo from "./RecordingInfo";

interface UserCallLogRecord {

    /**
     * Internal identifier of a cal log record
     */
    id?: string;

    /**
     * Canonical URI of a call log record
     */
    uri?: string;

    /**
     * Internal identifier of a call session
     */
    sessionId?: string;

    /**
     * 
     */
    from?: CallLogCallerInfo;

    /**
     * 
     */
    to?: CallLogCallerInfo;

    /**
     * Call type = ['Voice', 'Fax']
     */
    type?: "Voice" | "Fax";

    /**
     * Call direction = ['Inbound', 'Outbound']
     */
    direction?: "Inbound" | "Outbound";

    /**
     * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    startTime?: string;

    /**
     * Call duration in seconds
     */
    duration?: number;

    /**
     * 
     */
    recording?: RecordingInfo;
}

export default UserCallLogRecord;
