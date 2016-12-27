// Generated Source
import ExtensionInfoRequestContactInfoRegionalSettingsFormattingLocale from "./ExtensionInfoRequestContactInfoRegionalSettingsFormattingLocale";
import ExtensionInfoRequestContactInfoRegionalSettingsGreetingLanguage from "./ExtensionInfoRequestContactInfoRegionalSettingsGreetingLanguage";
import ExtensionInfoRequestContactInfoRegionalSettingsLanguage from "./ExtensionInfoRequestContactInfoRegionalSettingsLanguage";
import ExtensionInfoRequestContactInfoRegionalSettingsTimezone from "./ExtensionInfoRequestContactInfoRegionalSettingsTimezone";

interface ExtensionInfoRequestContactInfoRegionalSettings {

    /**
     * Timezone data
     */
    timezone?: ExtensionInfoRequestContactInfoRegionalSettingsTimezone;

    /**
     * User interface language data
     */
    language?: ExtensionInfoRequestContactInfoRegionalSettingsLanguage;

    /**
     * Information on language used for telephony greetings
     */
    greetingLanguage?: ExtensionInfoRequestContactInfoRegionalSettingsGreetingLanguage;

    /**
     * Formatting language preferences for numbers, dates and currencies
     */
    formattingLocale?: ExtensionInfoRequestContactInfoRegionalSettingsFormattingLocale;
}

export default ExtensionInfoRequestContactInfoRegionalSettings;
