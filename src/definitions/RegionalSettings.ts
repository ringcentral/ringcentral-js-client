// Generated Source
import CountryInfo from "./CountryInfo";
import FormattingLocaleInfo from "./FormattingLocaleInfo";
import GreetingLanguageInfo from "./GreetingLanguageInfo";
import LanguageInfo from "./LanguageInfo";
import TimezoneInfo from "./TimezoneInfo";

interface RegionalSettings {

    /**
     * Extension country information
     */
    homeCountry?: CountryInfo;

    /**
     * Extension timezone information
     */
    timezone?: TimezoneInfo;

    /**
     * User interface language data
     */
    language?: LanguageInfo;

    /**
     * Information on language used for telephony greetings
     */
    greetingLanguage?: GreetingLanguageInfo;

    /**
     * Formatting language preferences for numbers, dates and currencies
     */
    formattingLocale?: FormattingLocaleInfo;

    /**
     * Time format setting. The default value is '12h' = ['12h', '24h']
     */
    timeFormat?: "12h" | "24h";
}

export default RegionalSettings;
