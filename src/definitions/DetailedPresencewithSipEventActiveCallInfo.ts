// Generated Source
import SipData from "./SipData";

interface DetailedPresencewithSipEventActiveCallInfo {

    /**
     * Internal identifier of a call
     */
    id?: string;

    /**
     * Call direction
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Phone number or extension number of a caller
     */
    from?: string;

    /**
     * Phone number or extension number of a callee
     */
    to?: string;

    /**
     * Telephony call status. See Telephony Status Values for detailed status description
     */
    telephonyStatus?: "NoCall" | "CallConnected" | "Ringing" | "OnHold" | "ParkedCall";

    /**
     * Internal identifier of a call session
     */
    sessionId?: string;

    /**
     * SIP connection settings
     */
    sipData?: SipData;
}

export default DetailedPresencewithSipEventActiveCallInfo;
