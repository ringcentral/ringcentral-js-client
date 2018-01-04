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
     * 
     */
    from?: string;

    /**
     * 
     */
    to?: string;

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
