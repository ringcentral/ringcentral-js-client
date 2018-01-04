// Generated Source
import ForwardingInfoCreateRuleRequest from "./ForwardingInfoCreateRuleRequest";

interface UpdateAnsweringRuleRequest {

    /**
     * Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded
     */
    forwarding?: ForwardingInfoCreateRuleRequest;

    /**
     * 
     */
    name?: string;
}

export default UpdateAnsweringRuleRequest;
