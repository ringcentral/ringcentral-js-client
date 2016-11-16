// Generated Source
import { ExtensionInfoRequestProvisionContactInfo } from "./ExtensionInfoRequestProvisionContactInfo";

export interface ExtensionInfoRequestProvision {

    /**
     * Mandatory. Resulting extension status
     */
    status?: "NotActivated";

    /**
     * Mandatory. Extension user contact information
     */
    contact?: ExtensionInfoRequestProvisionContactInfo;
}
