// Generated Source

interface NotificationDeliveryModeRequest {

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    transportType?: "PubNub" | "Webhook" | "APNS" | "PubNub/APNS" | "PubNub/GCM";

    /**
     * Mandatory for 'APNS' and 'WebHook' transport types. For 'APNS' - internal identifier of a device 'device_token' for 'WebHook' - URL of a consumer service (cannot be changed during subscription update)
     */
    address?: string;

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'True' (even if specified as 'false'). If request contains only message event filters the value by default is 'False'
     */
    encryption?: boolean;

    /**
     * For 'PubNub/APNS' and 'PubNub/GCM' transport types. Name of a certificate
     */
    certificateName?: string;

    /**
     * For 'PubNub/APNS' and 'PubNub/GCM' transport types. Identifier of a registration
     */
    registrationId?: string;
}

export default NotificationDeliveryModeRequest;
