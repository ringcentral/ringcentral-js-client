// Generated Source
import ClientApplicationInfo from "./ClientApplicationInfo";
import ClientProvisioningInfo from "./ClientProvisioningInfo";

interface ClientApiResponse {

    /**
     * Client application information
     */
    client?: ClientApplicationInfo;

    /**
     * Provisioning parameters. Available for the  detected  applications only
     */
    provisioning?: ClientProvisioningInfo;
}

export default ClientApiResponse;
