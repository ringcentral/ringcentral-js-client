// Generated Source
import FixedOrderAgents from "./FixedOrderAgents";

interface QueueInfo {

    /**
     * Specifies how calls are transferred to group members
     */
    transferMode?: "Rotating" | "Simultaneous" | "FixedOrder";

    /**
     * Information on a call forwarding rule
     */
    fixedOrderAgents?: FixedOrderAgents[];

    /**
     * Connecting audio interruption mode
     */
    holdAudioInterruptionMode?: "Never" | "WhenMusicEnds" | "Periodically";

    /**
     * Connecting audio interruption message period in seconds
     */
    holdAudioInterruptionPeriod?: number;

    /**
     * Maximum time in seconds to wait for a call queue member before trying the next member
     */
    agentTimeout?: number;

    /**
     * Minimum post-call wrap up time in seconds before agent status is automatically set
     */
    wrapUpTime?: number;

    /**
     * Maximum hold time in seconds to wait for an available call queue member
     */
    holdTime?: number;

    /**
     * Maximum count of callers on hold
     */
    maxCallers?: number;

    /**
     * Action which should be taken if count of callers on hold exceeds the maximum
     */
    maxCallersAction?: "Voicemail" | "Announcement";
}

export default QueueInfo;
