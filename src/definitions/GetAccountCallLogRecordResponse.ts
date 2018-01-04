// Generated Source
import CallLogCallerInfo from "./CallLogCallerInfo";
import RecordingInfo from "./RecordingInfo";

interface GetAccountCallLogRecordResponse {

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
     * Caller information
     */
    from?: CallLogCallerInfo;

    /**
     * Callee information
     */
    to?: CallLogCallerInfo;

    /**
     * Call type
     */
    type?: "Voice" | "Fax";

    /**
     * Call direction
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Action description of the call operation
     */
    action?: "Unknown" | "Phone Call" | "Phone Login" | "Incoming Fax" | "Accept Call" | "FindMe" | "FollowMe" | "Outgoing Fax" | "Call Return" | "Calling Card" | "Ring Directly" | "RingOut Web" | "VoIP Call" | "RingOut PC" | "RingMe" | "Transfer" | "411 Info" | "Emergency" | "E911 Update" | "Support" | "RingOut Mobile";

    /**
     * Status description of the call operation
     */
    result?: "Unknown" | "ResultInProgress" | "Missed" | "Call accepted" | "Voicemail" | "Rejected" | "Reply" | "Received" | "Receive Error" | "Fax on Demand" | "Partial Receive" | "Blocked" | "Call connected" | "No Answer" | "International Disabled" | "Busy" | "Send Error" | "Sent" | "No fax machine" | "ResultEmpty" | "Account" | "Suspended" | "Call Failed" | "Call Failure" | "Internal Error" | "IP Phone offline" | "Restricted Number" | "Wrong Number" | "Stopped" | "Hang up" | "Poor Line Quality" | "Partially Sent" | "International Restriction" | "Abandoned" | "Declined" | "Fax Receipt Error" | "Fax Send Error";

    /**
     * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    startTime?: string;

    /**
     * Call duration in seconds
     */
    duration?: number;

    /**
     * Call recording data. Returned if the call is recorded
     */
    recording?: RecordingInfo;
}

export default GetAccountCallLogRecordResponse;
