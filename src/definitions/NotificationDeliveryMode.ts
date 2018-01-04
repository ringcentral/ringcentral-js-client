// Generated Source

interface NotificationDeliveryMode {

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    transportType?: "PubNub" | "APNS" | "PubNub/APNS/VoIP";

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. For APNS transport type the value is always  false
     */
    encryption?: boolean;

    /**
     * PubNub channel name. For APNS transport type - internal identifier of a device  device_token
     */
    address?: string;

    /**
     * PubNub subscriber credentials required to subscribe to the channel
     */
    subscriberKey?: string;

    /**
     * PubNub subscriber credentials required to subscribe to the channel. Optional (for PubNub transport type only)
     */
    secretKey?: string;

    /**
     * Encryption algorithm 'AES' (for PubNub transport type only)
     */
    encryptionAlgorithm?: string;

    /**
     * Key for notification message decryption (for PubNub transport type only)
     */
    encryptionKey?: string;
}

export default NotificationDeliveryMode;
