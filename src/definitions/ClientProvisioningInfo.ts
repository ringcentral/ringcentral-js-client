// Generated Source
import ClientProvisioningHintsInfo from "./ClientProvisioningHintsInfo";
import ClientProvisioningWebUriInfo from "./ClientProvisioningWebUriInfo";

interface ClientProvisioningInfo {

    /**
     * Links to the mobile web and Service Web resources
     */
    webUris?: ClientProvisioningWebUriInfo;

    /**
     * Informs client application on the required user action
     */
    hints?: ClientProvisioningHintsInfo;
}

export default ClientProvisioningInfo;
