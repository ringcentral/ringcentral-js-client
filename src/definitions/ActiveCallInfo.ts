// Generated Source
import DetailedCallInfo from "./DetailedCallInfo";

interface ActiveCallInfo {

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    direction?: "Inbound" | "Outbound";

    /**
     * Phone number or extension number of a caller. For GCM transport type '_from' property should be used
     */
    from?: string;

    /**
     * Name of a caller
     */
    fromName?: string;

    /**
     * Phone number or extension number of a callee
     */
    to?: string;

    /**
     * Name of a callee
     */
    toName?: string;

    /**
     * Time when the call is actually started
     */
    startTime?: string;

    /**
     * 
     */
    telephonyStatus?: string;

    /**
     * 
     */
    sipData?: DetailedCallInfo;

    /**
     * 
     */
    sessionId?: string;

    /**
     * 
     */
    terminationType?: string;
}

export default ActiveCallInfo;
