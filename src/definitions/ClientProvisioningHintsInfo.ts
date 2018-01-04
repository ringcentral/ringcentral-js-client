// Generated Source
import ClientProvisioningHintInfo from "./ClientProvisioningHintInfo";

interface ClientProvisioningHintsInfo {

    /**
     * Trial account expiration. Returned for trial accounts only
     */
    trialState?: ClientProvisioningHintInfo;

    /**
     * User credentials expiration
     */
    userCredentialState?: ClientProvisioningHintInfo;

    /**
     * Application version update. Returned only if the client current version is older than the latest version. 'actionRequired': 'true' means the application requires force updating to the latest version
     */
    appVersionUpgrade?: ClientProvisioningHintInfo;
}

export default ClientProvisioningHintsInfo;
