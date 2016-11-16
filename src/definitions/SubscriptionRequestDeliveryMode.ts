// Generated Source

export interface SubscriptionRequestDeliveryMode {

    /**
     * Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)
     */
    transportType?: "PubNub" | "APNS" | "PubNub/APNS/VoIP";

    /**
     * Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'True' (even if specified as 'false'). If request contains only message event filters the value by default is 'False'
     */
    encryption?: boolean;
}
