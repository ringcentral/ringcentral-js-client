// Generated Source

interface StatusType {

    /**
     * 
     */
    family?: "INFORMATIONAL" | "SUCCESSFUL" | "REDIRECTION" | "CLIENT_ERROR" | "SERVER_ERROR" | "OTHER";

    /**
     * 
     */
    statusCode?: number;

    /**
     * 
     */
    reasonPhrase?: string;
}

export default StatusType;
