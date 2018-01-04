// Generated Source

interface ClientProvisioningHintInfo {

    /**
     * Seconds until expiration date. Returned only if applicable
     */
    expiresIn?: number;

    /**
     * 'False', if the value of expiresIn is greater than 0 (zero), otherwise - 'True'
     */
    actionRequired?: boolean;
}

export default ClientProvisioningHintInfo;
