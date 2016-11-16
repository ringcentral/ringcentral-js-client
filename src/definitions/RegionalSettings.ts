// Generated Source
import { CountryInfo } from "./CountryInfo";
import { TimezoneInfo } from "./TimezoneInfo";
import { LanguageInfo } from "./LanguageInfo";
import { GreetingLanguageInfo } from "./GreetingLanguageInfo";
import { FormattingLocaleInfo } from "./FormattingLocaleInfo";

export interface RegionalSettings {

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
}
