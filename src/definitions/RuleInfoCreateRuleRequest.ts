// Generated Source
import ForwardingNumberInfoRulesCreateRuleRequest from "./ForwardingNumberInfoRulesCreateRuleRequest";

interface RuleInfoCreateRuleRequest {

    /**
     * Forwarding number (or group) ordinal
     */
    index?: number;

    /**
     * Number of rings for a forwarding number (or group)
     */
    ringCount?: number;

    /**
     * Forwarding number (or group) data
     */
    forwardingNumbers?: ForwardingNumberInfoRulesCreateRuleRequest[];
}

export default RuleInfoCreateRuleRequest;
