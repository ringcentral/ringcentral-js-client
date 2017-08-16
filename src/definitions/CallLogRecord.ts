// Generated Source
import BillingInfo from "./BillingInfo";
import CallerInfo from "./CallerInfo";
import LegInfo from "./LegInfo";
import RecordingInfo from "./RecordingInfo";
import VoicemailMessageInfo from "./VoicemailMessageInfo";

interface CallLogRecord {

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
    from?: CallerInfo;

    /**
     * Callee information
     */
    to?: CallerInfo;

    /**
     * For Extension Call Log only. Voicemail message data
     */
    message?: VoicemailMessageInfo;

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
    result?: "Unknown" | "InProgress" | "Missed" | "Call accepted" | "Voicemail" | "Rejected" | "Reply" | "Received" | "Receive Error" | "Fax on Demand" | "Partial Receive" | "Blocked" | "Call connected" | "No Answer" | "International Disabled" | "Busy" | "Send Error" | "Sent" | "No fax machine" | "ResultEmpty" | "Account" | "Suspended" | "Call Failed" | "Call Failure" | "Internal Error" | "IP Phone offline" | "Restricted Number" | "Wrong Number" | "Stopped" | "Hang up" | "Poor Line Quality" | "Partially Sent" | "International Restriction" | "Abandoned" | "Declined" | "Fax Receipt Error" | "Fax Send Error";

    /**
     * For 'Detailed' view only. Call billing information
     */
    billing?: BillingInfo;

    /**
     * The call start datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    startTime?: string;

    /**
     * Call duration in seconds
     */
    duration?: number;

    /**
     * Call recording data. Returned if the call is recorded, the withRecording parameter is set to 'True' in this case
     */
    recording?: RecordingInfo;

    /**
     * For 'Detailed' view only. The datetime when the call log record was modified in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
     */
    lastModifiedTime?: string;

    /**
     * For 'Detailed' view only. Call transport
     */
    transport?: "PSTN" | "VoIP";

    /**
     * For 'Detailed' view only. Leg description
     */
    legs?: LegInfo[];
}

export default CallLogRecord;
