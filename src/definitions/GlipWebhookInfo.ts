// Generated Source

interface GlipWebhookInfo {

    /**
     * ID of the webhook
     */
    id?: string;

    /**
     * ID of user whe created webhook
     */
    creatorId?: string;

    /**
     * IDs of groups where webhook has been created
     */
    groupsId?: string[];

    /**
     * Webhook creation time in ISO 8601 format
     */
    creationTime?: string;

    /**
     * Webhook last update time in ISO 8601 format
     */
    lastModifiedTime?: string;

    /**
     * Public url to send webhook's payload
     */
    uri?: string;

    /**
     * Current status of the webhook, one of 'Active', 'Suspended' or 'Deleted'
     */
    status?: "Active" | "Suspended" | "Deleted";
}

export default GlipWebhookInfo;
