// Generated Source
import CfaAttachments from "./CfaAttachments";
import CfaRecurrence from "./CfaRecurrence";

interface CfaSchedule {

    /**
     * 
     */
    scheduleId?: string;

    /**
     * 
     */
    recurrence?: CfaRecurrence;

    /**
     * 
     */
    viewType?: "Detailed" | "Simple";

    /**
     * 
     */
    attachments?: CfaAttachments;

    /**
     * 
     */
    recipients?: string[];

    /**
     * 
     */
    pages?: string[];
}

export default CfaSchedule;
