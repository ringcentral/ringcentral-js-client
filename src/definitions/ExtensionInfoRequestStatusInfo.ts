// Generated Source
import { StatusInfo } from "./StatusInfo";

export interface ExtensionInfoRequestStatusInfo {

    /**
     * Required extension status
     */
    status?: "Disabled" | "Enabled" | "NotActivated";

    /**
     * Extension status information, only for the 'Disabled' status
     */
    statusInfo?: StatusInfo;
}
