// Generated Source

interface VoicemailsInfo {

    /**
     * Email notification flag
     */
    notifyByEmail?: boolean;

    /**
     * SMS notification flag
     */
    notifyBySms?: boolean;

    /**
     * List of recipient email addresses for voicemail notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
     */
    advancedEmailAddresses?: string[];

    /**
     * List of recipient phone numbers for voicemail notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
     */
    advancedSmsEmailAddresses?: string[];

    /**
     * Indicates whether voicemail should be attached to email
     */
    includeAttachment?: boolean;

    /**
     * Indicates whether email should be automatically marked as read
     */
    markAsRead?: boolean;
}

export default VoicemailsInfo;
