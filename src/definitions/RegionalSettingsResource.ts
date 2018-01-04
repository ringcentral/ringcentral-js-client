// Generated Source
import CountryResource from "./CountryResource";
import LanguageResource from "./LanguageResource";
import TimezoneResource from "./TimezoneResource";

interface RegionalSettingsResource {

    /**
     * 
     */
    timezone?: TimezoneResource;

    /**
     * 
     */
    homeCountry?: CountryResource;

    /**
     * 
     */
    language?: LanguageResource;

    /**
     * 
     */
    greetingLanguage?: LanguageResource;

    /**
     * 
     */
    formattingLocale?: LanguageResource;
}

export default RegionalSettingsResource;
