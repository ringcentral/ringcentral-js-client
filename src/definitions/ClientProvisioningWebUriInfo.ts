// Generated Source

interface ClientProvisioningWebUriInfo {

    /**
     * Link to web page with the application description. Returned if the application needs to be updated, together with the appVersionUpgrade hint
     */
    appDownload?: string;

    /**
     * Link to the application distributive package. Returned if the application needs to be updated, together with the appVersionUpgrade hint
     */
    appDownloadFile?: string;

    /**
     * Link to express setup page (mobile application)
     */
    expressSetupMobile?: string;

    /**
     * Link to the RC Meetings application distributive package
     */
    meetingsAppDownload?: string;

    /**
     * Link to billing page (mobile application)
     */
    mobileWebBilling?: string;

    /**
     * Link to call handling page (mobile application)
     */
    mobileWebCallHandling?: string;

    /**
     * Link to international calling page (mobile application)
     */
    mobileWebInternationalCalling?: string;

    /**
     * Link to notifications page (mobile application)
     */
    mobileWebNotifications?: string;

    /**
     * Link to phone system settings page (mobile application)
     */
    mobileWebPhoneSystem?: string;

    /**
     * Link to reports page (mobile application)
     */
    mobileWebReporting?: string;

    /**
     * Link to reset password page (mobile application)
     */
    mobileWebResetPassword?: string;

    /**
     * Link to  Tell A Friend  page (mobile application)
     */
    mobileWebTellAFriend?: string;

    /**
     * Link to upgrade trial account (mobile application)
     */
    mobileWebTrialUpgrade?: string;

    /**
     * Link to user settings page (mobile application)
     */
    mobileWebUserSettings?: string;

    /**
     * Link to billing page (web application)
     */
    serviceWebBilling?: string;

    /**
     * Link to home page (web application)
     */
    serviceWebHome?: string;

    /**
     * Link to phone system settings page (web application)
     */
    serviceWebPhoneSystem?: string;

    /**
     * Link to reset password page (web application)
     */
    serviceWebResetPassword?: string;

    /**
     * Link to  Tell A Friend  page (web application)
     */
    serviceWebTellAFriend?: string;

    /**
     * Link to user settings page (web application)
     */
    serviceWebUserSettings?: string;

    /**
     * Link to sign up page (web application)
     */
    signUp?: string;

    /**
     * Link to support page (web application)
     */
    support?: string;
}

export default ClientProvisioningWebUriInfo;
