// Generated Source

interface SipInfoResponse {

    /**
     * User credentials
     */
    username?: string;

    /**
     * User password
     */
    password?: string;

    /**
     * Identifier for SIP authorization
     */
    authorizationId?: string;

    /**
     * SIP domain
     */
    domain?: string;

    /**
     * SIP outbound proxy
     */
    outboundProxy?: string;

    /**
     * Preferred transport. SIP info will be returned for this transport if supported
     */
    transport?: "UDP" | "TCP" | "TLS" | "WS" | "WSS";

    /**
     * For TLS transport only Base64 encoded certificate
     */
    certificate?: string;
}

export default SipInfoResponse;
