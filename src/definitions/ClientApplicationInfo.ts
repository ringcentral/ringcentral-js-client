// Generated Source

interface ClientApplicationInfo {

    /**
     * 'True', if the server succeeded detecting application info, sufficient to return provisioning info
     */
    detected?: boolean;

    /**
     * The value of 'User-Agent' header, as it was passed in request
     */
    userAgent?: string;

    /**
     * Application identifier (from authorization session)
     */
    appId?: string;

    /**
     * Application name (from authorization session, but must match 'User-Agent')
     */
    appName?: string;

    /**
     * Application version (parsed from 'User-Agent')
     */
    appVersion?: string;

    /**
     * Application platform operation system (parsed from 'User-Agent': Windows, MacOS, Android, iOS
     */
    appPlatform?: string;

    /**
     * Application platform operation system version (parsed from 'User-Agent')
     */
    appPlatformVersion?: string;

    /**
     * Locale, parsed from 'Accept-Language'. Currently en-GB and en-US locales are supported. The default value is en-US
     */
    locale?: string;
}

export default ClientApplicationInfo;
