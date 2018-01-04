// Generated Source

interface DeviceInfoRequest {

    /**
     * Device unique identifier, retrieved on previous session (if any)
     */
    id?: string;

    /**
     * For iOS devices only Certificate name (used by iOS applications for APNS subscription)
     */
    appExternalId?: string;

    /**
     * For SoftPhone only Computer name
     */
    computerName?: string;
}

export default DeviceInfoRequest;
