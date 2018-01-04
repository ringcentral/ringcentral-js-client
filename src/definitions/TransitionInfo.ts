// Generated Source

interface TransitionInfo {

    /**
     * Supported for account confirmation. Specifies whether welcome email is sent. The default value is 'True'
     */
    sendWelcomeEmail?: boolean;

    /**
     * Supported for account activation. Specifies whether confirmation email is sent. The default value is 'True'
     */
    sendConfirmationEmail?: boolean;

    /**
     * Specifies whether devices are shipped after successful account confirmation. The default value is 'True'
     */
    shipDevices?: boolean;

    /**
     * Supported for account confirmation. Activation email hash code
     */
    activationEmailHash?: string;
}

export default TransitionInfo;
