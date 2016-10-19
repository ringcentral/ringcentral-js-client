// Generated Source
import { ContactInfo } from "./ContactInfo";
import { ExtensionInfoRequestContactInfoRegionalSettings } from "./ExtensionInfoRequestContactInfoRegionalSettings";

export interface ExtensionInfoRequestContactInfo {

    /**
     * Contact information
     */
    contact?: ContactInfo;

    /**
     * Region data (timezone, home country, language)
     */
    regionalSettings?: ExtensionInfoRequestContactInfoRegionalSettings;

    /**
     * Specifies extension configuration wizard state (web service setup). The default value is 'NotStarted'
     */
    setupWizardState?: "NotStarted" | "Incomplete" | "Completed";

    /**
     * Extension user department
     */
    department?: string;
}