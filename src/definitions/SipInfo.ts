// Generated Source

interface SipInfo {

    /**
     * 
     */
    transport?: "UDP" | "TCP" | "TLS" | "WS" | "WSS";

    /**
     * 
     */
    certificate?: string;

    /**
     * 
     */
    username?: string;

    /**
     * 
     */
    password?: string;

    /**
     * 
     */
    authorizationId?: string;

    /**
     * 
     */
    domain?: string;

    /**
     * 
     */
    outboundProxy?: string;

    /**
     * 
     */
    wsProxy?: string;
}

export default SipInfo;
