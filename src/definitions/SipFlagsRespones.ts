// Generated Source

interface SipFlagsRespones {

    /**
     * If 'True' VoIP calling feature is enabled
     */
    voipFeatureEnabled?: "True" | "False";

    /**
     * If 'True' the request is sent from IP address of a country blocked for VoIP calling
     */
    voipCountryBlocked?: "True" | "False";

    /**
     * If 'True' outbound calls are enabled
     */
    outboundCallsEnabled?: "True" | "False";
}

export default SipFlagsRespones;
