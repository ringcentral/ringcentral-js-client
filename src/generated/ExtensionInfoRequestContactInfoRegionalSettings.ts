// Generated Source
import { ExtensionInfoRequestContactInfoRegionalSettingsTimezone } from "./ExtensionInfoRequestContactInfoRegionalSettingsTimezone";
import { ExtensionInfoRequestContactInfoRegionalSettingsLanguage } from "./ExtensionInfoRequestContactInfoRegionalSettingsLanguage";
import { ExtensionInfoRequestContactInfoRegionalSettingsGreetingLanguage } from "./ExtensionInfoRequestContactInfoRegionalSettingsGreetingLanguage";
import { ExtensionInfoRequestContactInfoRegionalSettingsFormattingLocale } from "./ExtensionInfoRequestContactInfoRegionalSettingsFormattingLocale";

export interface ExtensionInfoRequestContactInfoRegionalSettings {

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
