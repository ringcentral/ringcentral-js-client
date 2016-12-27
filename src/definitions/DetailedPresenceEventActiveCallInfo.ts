// Generated Source

interface DetailedPresenceEventActiveCallInfo {

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
     * Type of call termination. Supported for calls in 'NoCall' status. If the returned termination type is 'Intermediate' it means the call is not actually ended, the connection is established on one of the devices
     */
    terminationType?: "Final" | "Intermediate";
}

export default DetailedPresenceEventActiveCallInfo;
