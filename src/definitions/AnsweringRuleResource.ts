// Generated Source
import AnsweringForwardingResource from "./AnsweringForwardingResource";
import CallerResource from "./CallerResource";
import PhoneNumberResource from "./PhoneNumberResource";
import ScheduleResource from "./ScheduleResource";
import UnconditionalForwardingResource from "./UnconditionalForwardingResource";
import VoicemailSettingsResource from "./VoicemailSettingsResource";

interface AnsweringRuleResource {

    /**
     * 
     */
    uri?: string;

    /**
     * 
     */
    id?: string;

    /**
     * 
     */
    type?: "BusinessHours" | "AfterHours" | "Custom";

    /**
     * 
     */
    name?: string;

    /**
     * 
     */
    enabled?: boolean;

    /**
     * 
     */
    schedule?: ScheduleResource;

    /**
     * 
     */
    callers?: CallerResource[];

    /**
     * 
     */
    calledNumbers?: PhoneNumberResource[];

    /**
     * 
     */
    callHandlingAction?: "ForwardCalls" | "TakeMessagesOnly" | "PlayAnnouncementOnly" | "UnconditionalForwarding" | "AgentQueue" | "Unknown";

    /**
     * 
     */
    forwarding?: AnsweringForwardingResource;

    /**
     * 
     */
    unconditionalForwarding?: UnconditionalForwardingResource;

    /**
     * 
     */
    voicemail?: VoicemailSettingsResource;
}

export default AnsweringRuleResource;
