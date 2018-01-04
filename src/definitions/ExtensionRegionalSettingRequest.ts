// Generated Source
import ExtensionCountryInfoRequest from "./ExtensionCountryInfoRequest";
import ExtensionFormattingLocaleInfoRequest from "./ExtensionFormattingLocaleInfoRequest";
import ExtensionGreetingLanguageInfoRequest from "./ExtensionGreetingLanguageInfoRequest";
import ExtensionLanguageInfoRequest from "./ExtensionLanguageInfoRequest";
import ExtensionTimezoneInfoRequest from "./ExtensionTimezoneInfoRequest";

interface ExtensionRegionalSettingRequest {

    /**
     * 
     */
    homeCountry?: ExtensionCountryInfoRequest;

    /**
     * 
     */
    timezone?: ExtensionTimezoneInfoRequest;

    /**
     * 
     */
    language?: ExtensionLanguageInfoRequest;

    /**
     * 
     */
    greetingLanguage?: ExtensionGreetingLanguageInfoRequest;

    /**
     * 
     */
    formattingLocale?: ExtensionFormattingLocaleInfoRequest;

    /**
     * Time format setting. The default value is '12h' = ['12h', '24h']
     */
    timeFormat?: string;
}

export default ExtensionRegionalSettingRequest;
