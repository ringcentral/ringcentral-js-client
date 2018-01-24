// Generated Source
import CalledNumberInfo from "./CalledNumberInfo";
import CallersInfo from "./CallersInfo";
import ForwardingInfo from "./ForwardingInfo";
import GreetingInfo from "./GreetingInfo";
import QueueInfo from "./QueueInfo";
import ScheduleInfo from "./ScheduleInfo";
import TransferredExtensionInfo from "./TransferredExtensionInfo";
import UnconditionalForwardingInfo from "./UnconditionalForwardingInfo";
import VoicemailInfo from "./VoicemailInfo";

interface AnsweringRuleInfo {

    /**
     * Canonical URI to the answering rule resource
     */
    uri?: string;

    /**
     * Internal identifier of an answering rule
     */
    id?: string;

    /**
     * Type of an answering rule
     */
    type?: "BusinessHours" | "AfterHours" | "Custom";

    /**
     * Name of an answering rule specified by user
     */
    name?: string;

    /**
     * Specifies if an answering rule is active or inactive
     */
    enabled?: boolean;

    /**
     * Schedule when an answering rule should be applied
     */
    schedule?: ScheduleInfo;

    /**
     * Answering rules are applied when calling to selected number(s)
     */
    calledNumbers?: CalledNumberInfo[];

    /**
     * Answering rules are applied when calls are received from specified caller(s)
     */
    callers?: CallersInfo[];

    /**
     * Specifies how incoming calls are forwarded
     */
    callHandlingAction?: "ForwardCalls" | "UnconditionalForwarding" | "AgentQueue" | "TransferToExtension" | "TakeMessagesOnly" | "PlayAnnouncementOnly";

    /**
     * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
     */
    forwarding?: ForwardingInfo;

    /**
     * Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'
     */
    unconditionalForwarding?: UnconditionalForwardingInfo;

    /**
     * Queue settings applied for department (call queue) extension type, with the 'AgentQueue' value specified as a call handling action
     */
    queue?: QueueInfo;

    /**
     * Transfer settings applied for department (call queue) extension type, with 'TransferToExtension' call handling action
     */
    transfer?: TransferredExtensionInfo;

    /**
     * Specifies whether to take a voicemail and who should do it
     */
    voicemail?: VoicemailInfo;

    /**
     * Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List
     */
    greetings?: GreetingInfo[];
}

export default AnsweringRuleInfo;
