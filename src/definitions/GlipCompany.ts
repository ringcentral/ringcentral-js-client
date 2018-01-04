// Generated Source

interface GlipCompany {

    /**
     * Internal identifier of an RC account/Glip company, or tilde (~) to indicate a company the current user belongs to
     */
    id?: string;

    /**
     * Name of a company
     */
    name?: string;

    /**
     * Domain name of a company
     */
    domain?: string;

    /**
     * Datetime of creation in ISO 8601 format
     */
    creationTime?: string;

    /**
     * Datetime of last modification in ISO 8601 format
     */
    lastModifiedTime?: string;
}

export default GlipCompany;
