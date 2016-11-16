// Generated Source
import StatusInfo from "./StatusInfo";

interface ExtensionInfoRequestStatusInfo {

    /**
     * Required extension status
     */
    status?: "Disabled" | "Enabled" | "NotActivated";

    /**
     * Extension status information, only for the 'Disabled' status
     */
    statusInfo?: StatusInfo;
}

export default ExtensionInfoRequestStatusInfo;
