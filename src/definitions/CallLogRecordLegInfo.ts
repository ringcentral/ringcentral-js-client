// Generated Source
import CallLogCallerInfo from "./CallLogCallerInfo";
import ExtensionInfoCallLog from "./ExtensionInfoCallLog";
import RecordingInfo from "./RecordingInfo";

interface CallLogRecordLegInfo {

    /**
     * Action description of the call operation
     */
    action?: "Unknown" | "Phone Call" | "Phone Login" | "Incoming Fax" | "Accept Call" | "FindMe" | "FollowMe" | "Outgoing Fax" | "Call Return" | "Calling Card" | "Ring Directly" | "RingOut Web" | "VoIP Call" | "RingOut PC" | "RingMe" | "Transfer" | "411 Info" | "Emergency" | "E911 Update" | "Support" | "RingOut Mobile";

    /**
     * Call direction
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Call duration in seconds
     */
    duration?: number;

    /**
     * Information on extension
     */
    extension?: ExtensionInfoCallLog;

    /**
     * Leg type
     */
    legType?: string;

    /**
     * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    startTime?: string;

    /**
     * Call type
     */
    type?: "Voice" | "Fax";

    /**
     * Status description of the call operation
     */
    result?: "Unknown" | "ResultInProgress" | "Missed" | "Call accepted" | "Voicemail" | "Rejected" | "Reply" | "Received" | "Receive Error" | "Fax on Demand" | "Partial Receive" | "Blocked" | "Call connected" | "No Answer" | "International Disabled" | "Busy" | "Send Error" | "Sent" | "No fax machine" | "ResultEmpty" | "Account" | "Suspended" | "Call Failed" | "Call Failure" | "Internal Error" | "IP Phone offline" | "Restricted Number" | "Wrong Number" | "Stopped" | "Hang up" | "Poor Line Quality" | "Partially Sent" | "International Restriction" | "Abandoned" | "Declined" | "Fax Receipt Error" | "Fax Send Error";

    /**
     * Caller information
     */
    from?: CallLogCallerInfo;

    /**
     * Callee information
     */
    to?: CallLogCallerInfo;

    /**
     * Call transport
     */
    transport?: "PSTN" | "VoIP";

    /**
     * Call recording data. Returned if the call is recorded
     */
    recording?: RecordingInfo;
}

export default CallLogRecordLegInfo;
