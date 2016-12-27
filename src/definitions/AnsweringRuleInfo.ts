// Generated Source
import AnsweringRuleInfoCalleeInfo from "./AnsweringRuleInfoCalleeInfo";
import AnsweringRuleInfoCallerInfo from "./AnsweringRuleInfoCallerInfo";
import ForwardingInfo from "./ForwardingInfo";
import GreetingInfo from "./GreetingInfo";
import ScheduleInfo from "./ScheduleInfo";
import UnconditionalForwardingInfo from "./UnconditionalForwardingInfo";
import VoicemailInfo from "./VoicemailInfo";

interface AnsweringRuleInfo {

    /**
     * Canonical URI to the answering rule resource
     */
    uri?: string;

    /**
     * Internal identifier of an asnwering rule
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
    calledNumbers?: AnsweringRuleInfoCalleeInfo[];

    /**
     * Answering rules are applied when calls are received from specified caller(s)
     */
    callers?: AnsweringRuleInfoCallerInfo[];

    /**
     * Specifies how incoming calls are forwarded
     */
    callHandlingAction?: "ForwardCalls" | "TakeMessagesOnly" | "PlayAnnouncementOnly" | "UnconditionalForwarding";

    /**
     * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
     */
    forwarding?: ForwardingInfo;

    /**
     * Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'
     */
    unconditionalForwarding?: UnconditionalForwardingInfo;

    /**
     * Specifies whether to take a voicemail and who should do it
     */
    voicemail?: VoicemailInfo;

    /**
     * Predefined greetings applied for an answering rule
     */
    greetings?: GreetingInfo[];
}

export default AnsweringRuleInfo;
