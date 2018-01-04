// Generated Source

interface DeliveryModeResource {

    /**
     * 
     */
    transportType?: "PUBNUB" | "APNS" | "PUBNUB_TO_APNS" | "PUBNUB_TO_APNS_VOIP" | "PUBNUB_TO_GCM" | "PUBNUB_TO_GCM_VOIP" | "WEB_HOOK";

    /**
     * 
     */
    encryption?: boolean;

    /**
     * 
     */
    address?: string;

    /**
     * 
     */
    subscriberKey?: string;

    /**
     * 
     */
    publisherKey?: string;

    /**
     * 
     */
    encryptionAlgorithm?: string;

    /**
     * 
     */
    encryptionKey?: string;

    /**
     * 
     */
    authKey?: string;

    /**
     * 
     */
    cipherKey?: string;

    /**
     * 
     */
    registrationId?: string;

    /**
     * 
     */
    certificateName?: string;
}

export default DeliveryModeResource;
